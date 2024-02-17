import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-600">
        &copy; {currentYear} Harsh PAndey. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;