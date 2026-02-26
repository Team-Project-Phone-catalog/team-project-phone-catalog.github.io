import type { StripeElements, Stripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';

import { supabase } from '@/utils/supabaseClient';
import { notify } from '@/utils/notifications';
import type { City, Warehouse } from '@/utils/novaPostaClient';

import type {
  CheckoutCartItem,
  DeliveryMethod,
  PaymentMethod,
} from '../CheckoutModal.types';

interface CreateOrderInDatabaseParams {
  cartItems: CheckoutCartItem[];
  totalPrice: number;
  fullName: string;
  phone: string;
  deliveryMethod: DeliveryMethod;
  address: string;
  selectedCity: City | null;
  selectedWarehouse: Warehouse | null;
  paymentMethod: PaymentMethod;
  clearCart: () => void;
  setSuccessOrderId: (orderId: string) => void;
}

export async function createOrderInDatabase({
  cartItems,
  totalPrice,
  fullName,
  phone,
  deliveryMethod,
  address,
  selectedCity,
  selectedWarehouse,
  paymentMethod,
  clearCart,
  setSuccessOrderId,
}: CreateOrderInDatabaseParams) {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError) {
      notify.error('You must be logged in to place an order.');
      return;
    }

    const userId = userData.user.id;

    const orderPayload = {
      user_id: userId,
      status: 'processing',
      total: totalPrice,
      date: new Date(),
      full_name: fullName.trim(),
      phone: phone.trim(),
      delivery_method: deliveryMethod,
      address:
        deliveryMethod === 'home' ? address.trim()
        : deliveryMethod === 'novapost' && selectedWarehouse ?
          `${selectedCity?.Description} - ${selectedWarehouse.Description}`
        : null,
      payment_method: paymentMethod,
    };

    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([orderPayload])
      .select()
      .single();

    if (orderError) {
      notify.error(orderError.message);
      return;
    }

    const itemsPayload = cartItems.map((item) => ({
      order_id: order.id,
      product_id: Number(item.id),
      name: item.name,
      price: item.priceDiscount ?? item.price,
      image: item.image ?? null,
      quantity: item.quantity,
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(itemsPayload);

    if (itemsError) {
      notify.error(itemsError.message);
      return;
    }

    clearCart();
    setSuccessOrderId(String(order.id));

    notify.success(
      'Order placed successfully',
      'Redirecting you to your orders...',
    );
  } catch {
    notify.error('Something went wrong. Please try again.');
  }
}

export async function createPaymentIntent(totalPrice: number) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    notify.error('Please sign in to complete payment.');
    return null;
  }

  const { data, error: paymentIntentError } = await supabase.functions.invoke(
    'create-payment-intent',
    {
      body: {
        amount: totalPrice,
      },
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    },
  );

  if (paymentIntentError) {
    console.error('create-payment-intent error:', paymentIntentError);
    notify.error(
      paymentIntentError.message || 'Failed to create payment intent',
    );
    return null;
  }

  if (data && typeof data === 'object' && 'clientSecret' in data) {
    return data.clientSecret as string;
  }

  notify.error('Invalid payment response');
  return null;
}

interface ConfirmCardPaymentParams {
  stripe: Stripe | null;
  elements: StripeElements | null;
  clientSecret: string;
}

export async function confirmCardPayment({
  stripe,
  elements,
  clientSecret,
}: ConfirmCardPaymentParams) {
  if (!stripe || !elements) {
    notify.error('Stripe is not loaded');
    return false;
  }

  const { error, paymentIntent } = await stripe.confirmCardPayment(
    clientSecret,
    {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    },
  );

  if (error) {
    notify.error(error.message || 'Payment failed');
    return false;
  }

  return paymentIntent?.status === 'succeeded';
}
