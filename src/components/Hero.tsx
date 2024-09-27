import React from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePromise: Promise<Stripe | null> = loadStripe('your_stripe_publishable_key');

const Hero: React.FC = () => {
  const handleGetStarted = async () => {
    const quantity = parseInt(prompt('Enter the number of license keys you want to purchase:', '1') || '1', 10);
    if (isNaN(quantity) || quantity < 1) {
      alert('Please enter a valid number.');
      return;
    }

    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity }),
    });

    const { id } = await response.json();
    const stripe = await stripePromise;

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({ sessionId: id });
      if (error) {
        alert(error.message);
      }
    }
  };

  return (
    <section id="hero" className="mb-16 text-center">
      <h2 className="text-3xl font-semibold mb-6">Get Everyone on the Same Page</h2>
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/your-video-id"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Acro-Ally Video"
        ></iframe>
      </div>
      <button onClick={handleGetStarted} className="get-started-button inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
        Get Acro-ally Now
      </button>
    </section>
  );
};

export default Hero;