import React from 'react';
import axios from 'axios';

const Hero: React.FC = () => {
  const handleGetStarted = async () => {
    const quantity = parseInt(prompt('Enter the number of license keys you want to purchase:', '1') || '1', 10);
    const email = prompt('Enter your email address:', '');

    if (isNaN(quantity) || quantity < 1) {
      alert('Please enter a valid number.');
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4242/create-checkout-session', {
        quantity,
        email,
      });
      const { id } = response.data;
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId: id });
        if (error) {
          alert(error.message);
        }
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="hero" className="mb-16 text-center">
      <h2 className="text-3xl font-semibold mb-6">Get Everyone on the Same Page</h2>
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/your-video-id"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Acro-Ally Video"
        ></iframe>
      </div>
      <a
        href="https://buy.stripe.com/7sI4jG2D18TW18I7ss"
        className="get-started-button inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
      >
        Get Acro-ally Now
      </a>
    </section>
  );
};

export default Hero;