export {};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY');

    if (!stripeSecretKey) {
      throw new Error('STRIPE_SECRET_KEY is not set');
    }

    const { amount } = (await req.json()) as { amount?: number };

    if (!amount || amount <= 0) {
      return new Response(JSON.stringify({ error: 'Invalid amount' }), {
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    }

    const stripeAmount = Math.round(amount * 100);

    const auth = btoa(`${stripeSecretKey}:`);

    const stripeResponse = await fetch(
      'https://api.stripe.com/v1/payment_intents',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${auth}`,
        },
        body: new URLSearchParams({
          amount: stripeAmount.toString(),
          currency: 'usd',
        }).toString(),
      },
    );

    const stripeData = (await stripeResponse.json()) as {
      client_secret?: string;
      error?: { message?: string };
    };

    if (!stripeResponse.ok) {
      return new Response(
        JSON.stringify({
          error: stripeData.error?.message || 'Stripe error',
        }),
        {
          status: stripeResponse.status,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        },
      );
    }

    return new Response(
      JSON.stringify({
        clientSecret: stripeData.client_secret,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  }
});
