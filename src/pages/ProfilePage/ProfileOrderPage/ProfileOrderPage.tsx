import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileOrderPage.module.scss';
import { Sidebar } from '../../../components/SideBar/SideBar.tsx';
import { Breadcrumbs } from '../../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
// ── типи ──────────────────────────────────────────────────────────────────
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// ── тимчасові мок-дані ────────────────────────────────────────────────────
const mockItems: CartItem[] = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro 128GB',
    price: 999,
    image: 'https://via.placeholder.com/80',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Apple iPad Air 256GB',
    price: 749,
    image: 'https://via.placeholder.com/80',
    quantity: 2,
  },
];

// ── CartProduct — дочірній компонент (НЕ сторінка) ────────────────────────
const CartProduct: React.FC<{
  item: CartItem;
  onRemove: (id: number) => void;
  onChangeQty: (id: number, qty: number) => void;
}> = ({ item, onRemove, onChangeQty }) => (
  <div className={styles.cartProduct}>
    <button
      className={styles.cartProduct__remove}
      onClick={() => onRemove(item.id)}
      aria-label="Remove item"
    >
      ✕
    </button>

    <img
      src={item.image}
      alt={item.name}
      className={styles.cartProduct__image}
    />

    <span className={styles.cartProduct__name}>{item.name}</span>

    <div className={styles.cartProduct__controls}>
      <button
        className={styles.cartProduct__qty}
        onClick={() => onChangeQty(item.id, item.quantity - 1)}
        disabled={item.quantity <= 1}
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span className={styles.cartProduct__count}>{item.quantity}</span>

      <button
        className={styles.cartProduct__qty}
        onClick={() => onChangeQty(item.id, item.quantity + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>

    <span className={styles.cartProduct__price}>
      ${(item.price * item.quantity).toFixed(2)}
    </span>
  </div>
);

const EmptyCart: React.FC = () => (
  <div className={styles.emptyCart}>
    <div className={styles.emptyCart__icon}>🛒</div>
    <p className={styles.emptyCart__text}>Your cart is empty</p>
    <Link
      to="/catalog"
      className={styles.emptyCart__link}
    >
      Back to shop
    </Link>
  </div>
);

export const ProfileOrderPage: React.FC = () => {
  const [items, setItems] = React.useState<CartItem[]>(mockItems);

  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const updateQuantity = (id: number, qty: number) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i)),
    );

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePage__container}>
        <div className={styles.profilePage__layout}>
          <Sidebar
            userName=""
            userEmail=""
          />

          <main className={styles.profilePage__content}>
            <Breadcrumbs />
            <h1 className={styles.profilePage__title}>Cart</h1>

            {items.length === 0 ?
              <EmptyCart />
            : <div className={styles.cart__body}>
                <section className={styles.cart__products}>
                  {items.map((item) => (
                    <CartProduct
                      key={item.id}
                      item={item}
                      onRemove={removeItem}
                      onChangeQty={updateQuantity}
                    />
                  ))}
                </section>

                <aside className={styles.cart__summary}>
                  <div className={styles.summary}>
                    <p className={styles.summary__total}>${total.toFixed(2)}</p>
                    <p className={styles.summary__count}>
                      Total for {totalItems} item{totalItems !== 1 ? 's' : ''}
                    </p>

                    <hr className={styles.summary__divider} />

                    <button className={styles.summary__checkout}>
                      Checkout
                    </button>
                  </div>
                </aside>
              </div>
            }
          </main>
        </div>
      </div>
    </div>
  );
};
