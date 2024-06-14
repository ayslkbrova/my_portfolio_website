import React from 'react';
import logo from '../assets/image/ayselogo.png';
const nav = () => {
  return (
    <div className='flex items-center justify-around text-white my-5 animate-fade-in-slide-up'>
<img src={logo} className="w-32" alt="" />
      <ul className='flex space-x-10 text-lg animate-jump'>
        <li ><a href="">Home</a></li>
        <li className='animate-fade-in-slide-up'><a href="">About</a></li>
        <li className='animate-fade-in-slide-up'><a href="">Skills</a></li>
        <li className='animate-fade-in-slide-up'><a href="">Projects</a></li>
        <li className='animate-fade-in-slide-up'><a href="">Contact</a></li>
      </ul>
    </div>
  )
}

export default nav