import React from 'react';

const Hero: React.FC = () => {
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