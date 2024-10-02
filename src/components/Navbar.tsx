import React from 'react';

const Navbar: React.FC = () => {
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
            <a
              href="https://buy.stripe.com/7sI4jG2D18TW18I7ss"
              className="get-started-button bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;