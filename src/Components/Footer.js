import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row 
      justify-between items-center">
        <div className="sm:text-left text-center">
          <p className="text-sm">© 2024 DineSpot. All rights reserved.</p>
        </div>
        <div className="sm:text-right text-center">
          <Link to="/terms" className="text-sm hover:text-primary">
            Terms of Service
          </Link>
          <span className="mx-2 text-sm text-gray-300">|</span>
          <Link to="/privacy" className="text-sm hover:text-primary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



