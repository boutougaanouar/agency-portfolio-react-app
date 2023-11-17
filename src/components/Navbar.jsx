import React, { useEffect } from 'react';
import { useState } from 'react';
import profile from '../assets/images/profile.png';

const Navbar = () => {
    const [ isMenuOpen, setIsMenuOpen ] =useState(false);
    const [ isSticky, setIsSticky ] = useState(false);

    //set togle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.addEventListener('scroll', handleScroll);
            }
        }});

        //nav array
        const navItems = [
            {link: '#', name: 'Home'},
            {link: '#', name: 'About'},
            {link: '#', name: 'Services'},
            {link: '#', name: 'Contact'},
        ];

  return (
    <header className='w-full bg-white md:bg-transparant fixed top-0 left-0 right-0'>
        <nav>
            <div>
                <a href="" className='text-2xl fonst-semibold flex items-center space-x-3'><img src={profile} alt="boutouga" className='w-10 
                inline-block items-center'/>
                <span className='text-orange-700'>Boutouga</span></a>
                <ul></ul>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;
