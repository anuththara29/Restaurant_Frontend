import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = (id) => {
    navigate('/');
    closeMenu();
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className={`shadow-md ${isOpen ? 'bg-transparent' : 'bg-white'}`}>
      <div className='container flex justify-between items-center'>
        <div className='w-20 h-20 pt-6'>
          <img src={logo} alt='logo' />
        </div>
        <div className='hidden md:flex items-center gap-10 text-lg'>
          <Link className="inline-block hover:text-primary cursor-pointer" 
          onClick={() => handleScroll('home')}>
            Home
          </Link>
          <Link className="inline-block hover:text-primary cursor-pointer" 
          onClick={() => handleScroll('about')}>
            About Us
          </Link>
          <Link className="inline-block hover:text-primary cursor-pointer" 
          onClick={() => handleScroll('contact')}>
            Contact Us
          </Link>
          <button className="bg-primary text-white px-4 py-2 rounded-full 
          hover:bg-primaryDark">
            <Link to='/register'>Register</Link>
          </button>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='fixed top-0 left-0 h-full w-52 bg-white shadow-md z-50'>
          <div className='p-4'>
            <div className='w-20 h-20 pt-6'>
              <img src={logo} alt='logo' />
            </div>
            <ul className='flex flex-col gap-10 mt-4'>
              <li>
                <Link className="block hover:text-primary cursor-pointer" 
                onClick={() => handleScroll('home')}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="block hover:text-primary cursor-pointer" 
                onClick={() => handleScroll('about')}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="block hover:text-primary cursor-pointer" 
                onClick={() => handleScroll('contact')}>
                  Contact Us
                </Link>
              </li>
              <li>
                <button className="bg-primary text-white px-4 py-2 rounded-full 
                hover:bg-primaryDark">
                  <Link to='/register'>Register</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
