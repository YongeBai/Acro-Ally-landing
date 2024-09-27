import React from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePromise: Promise<Stripe | null> = loadStripe('your_stripe_publishable_key');

const Navbar: React.FC = () => {
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
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="path/to/your/logo.png" alt="Acro-Ally Logo" className="h-8 w-auto mr-2" />
          <span className="font-bold text-xl text-blue-400">Acro-Ally</span>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#benefits" className="text-gray-300 hover:text-blue-400">Benefits</a></li>
          <li><a href="#features" className="text-gray-300 hover:text-blue-400">Features</a></li>
          <li>
            <button onClick={handleGetStarted} className="get-started-button bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;