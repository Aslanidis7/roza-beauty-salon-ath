import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-pink-600 bg-opacity-80 p-4 fixed top-0 w-full flex justify-between items-center shadow-md transition duration-500 z-50">
      {/* Logo/Title Section */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
          Roza Beauty Salon
        </h1>
      </div>

      {/* Hamburger Menu Button */}
      <button 
        className="md:hidden p-2 rounded-lg hover:bg-pink-700 transition-colors duration-300 z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <FiX size={24} className="text-white" />
        ) : (
          <FiMenu size={24} className="text-white" />
        )}
      </button>

      {/* Desktop Menu */}
      <ul className="md:flex space-x-8 hidden md:items-center md:justify-center">
        <li>
          <NavLink 
            to="/" 
            className="text-white hover:text-pink-200 transition duration-300 ease-in-out transform hover:scale-105 underline-animation"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/services" 
            className="text-white hover:text-pink-200 transition duration-300 ease-in-out transform hover:scale-105 underline-animation"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/gallery" 
            className="text-white hover:text-pink-200 transition duration-300 ease-in-out transform hover:scale-105 underline-animation"
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/testimonials" 
            className="text-white hover:text-pink-200 transition duration-300 ease-in-out transform hover:scale-105 underline-animation"
          >
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className="text-white hover:text-pink-200 transition duration-300 ease-in-out transform hover:scale-105 underline-animation"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      
      {/* Mobile Menu with Animation */}
      <div 
        className={`md:hidden fixed top-[4rem] left-0 w-full bg-pink-600 bg-opacity-90 transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <NavLink 
              to="/" 
              onClick={toggleMenu}
              className="text-white hover:text-pink-200 transition duration-300 ease-in-out transform hover:scale-105 underline-animation"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              onClick={toggleMenu}
              className="text-white hover:text-pink-200 transition duration-300 ease-in-out transform hover:scale-105 underline-animation"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/gallery" 
              onClick={toggleMenu}
              className="text-white hover:text-pink-200 transition duration-300 ease-in-out transform hover:scale-105 underline-animation"
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/testimonials" 
              onClick={toggleMenu}
              className="text-white hover:text-pink-200 transition duration-300 ease-in-out transform hover:scale-105 underline-animation"
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              onClick={toggleMenu}
              className="text-white hover:text-pink-200 transition duration-300 ease-in-out transform hover:scale-105 underline-animation"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;