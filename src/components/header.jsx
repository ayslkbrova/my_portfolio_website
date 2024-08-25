import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/image/imza.svg';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState('bg-transparent');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground('bg-black transition-colors duration-500');
        if (isOpen) {
          setIsOpen(false);
        }
      } else {
        setNavBackground('bg-transparent transition-colors duration-500');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-50 ${navBackground}`}>
      <div className="flex items-center justify-between text-white px-4 max-w-6xl mx-auto z-50">
      <img src={logo} className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" alt="Logo" />


        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-3xl text-primaryColor cursor-pointer z-50" />
          ) : (
            <FaBars className="text-3xl text-primaryColor cursor-pointer z-50" />
          )}
        </div>
        <ul className="hidden md:flex space-x-8 text-lg">
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item} className="hover:text-primaryColor transition duration-300">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#141414] shadow-lg z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
        >
          <div className="flex justify-between px-2 z-50">
          <img src={logo} className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" alt="Logo" />
            <button
              onClick={toggleMenu}
              className="text-3xl text-white focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col items-start justify-start space-y-6 text-white p-4">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li
                key={item}
                className="w-full hover:bg-primaryColor hover:text-white transition duration-300  px-1 text-[26px] font-semibold leading-[32px} text-left"
              >
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Nav;
