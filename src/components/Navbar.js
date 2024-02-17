import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">News App</h1>
        <div>
          <a
            href="#home"
            className="text-white hover:text-gray-200 mr-4"
          >
            Home
          </a>
    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;