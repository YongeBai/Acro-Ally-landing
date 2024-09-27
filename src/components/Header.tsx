import React from 'react';
        
const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Acro-Ally</h1>
        <p className="text-xl">Your Team's Shared Dictionary</p>
      </div>
    </header>
  );
};
        
export default Header;