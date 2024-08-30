import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ReactComponent as LogoSvg } from '../assets/image/imza.svg'; // SVG'yi import edin

const Logo = () => {
  const { theme } = useTheme();

  return (
    <LogoSvg
      className={`w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}
      fill="currentColor"
    />
  );
}

export default Logo;