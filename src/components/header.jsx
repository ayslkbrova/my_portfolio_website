import React, { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import logo from '../assets/image/imza.svg';
import logodark from '../assets/image/imzadark.svg';
import { CSSTransition } from 'react-transition-group';
import '../index.css';
import { useTheme } from '../context/ThemeContext';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Determine colors and logos based on the theme
  const navBackground = theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white';
  const liColor = theme === 'dark' ? 'text-black' : 'text-white';
  const currentLogo = theme === 'dark' ? logodark : logo;

  // Determine shadow based on the theme
  const shadowClass = theme === 'dark' ? 'shadow-md' : 'shadow-md  shadow-[#2D3748]';

  return (
    <nav className={`fixed w-full z-50 ${navBackground} transition-colors duration-500 ${shadowClass}`}>
      <div className="flex items-center justify-between px-4 max-w-6xl mx-auto z-50">
        <img src={currentLogo} className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" alt="Logo" />

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Theme Toggle (Mobile) */}
          <button onClick={toggleTheme} className="text-2xl focus:outline-none">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center space-x-8 text-lg ${liColor}`}>
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item} className="hover:text-primaryColor transition duration-300">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle (Desktop) */}
        <button onClick={toggleTheme} className="hidden md:block text-2xl focus:outline-none">
          {theme === 'dark' ? <FaMoon /> : <FaSun />}
        </button>
      </div>

      {/* Mobile Menu */}
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="menu"
        unmountOnExit
      >
        <div className="fixed top-0 right-0 w-full h-full bg-[#141414] shadow-lg z-40 md:hidden">
          <div className="flex justify-between px-4 py-4">
            <img src={logo} className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" alt="Logo" />
            <button onClick={toggleMenu} className="text-xl text-white focus:outline-none">
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col items-start justify-start space-y-6 text-white p-4">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item} className="w-full hover:bg-primaryColor hover:text-white transition duration-300 px-1 text-[26px] font-semibold leading-[32px] text-left">
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </nav>
  );
};

export default Nav;
