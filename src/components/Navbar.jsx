import React, { useEffect } from 'react';
import { useState } from 'react';
import profile from '../assets/images/profile.png';
import { Link } from 'react-scroll';
// import { Faxmark, FaBars } from "react-icons/fa6";


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
            {link: 'Home', path: 'Home'},
            {link: 'About', path: 'About'},
            {link: 'Services', path: 'Services'},
            {link: 'Contact', path: 'Contact'},
        ];

  return (
    <header className='w-full bg-white md:bg-transparant fixed top-0 left-0 right-0'>
        <nav className={'py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 border-b bg-white duration-300" : "" } '}>
            <div className='flex justify-between items-center text-base gap-8'>
                <a href="" className='text-2xl fonst-semibold flex items-center space-x-3'>
                    <img src={profile} alt="boutouga" className='w-10 inline-block items-center'/>
                    <span className='text-orange-700'>Boutouga</span>
                </a>
                <ul className='md:flex space-x-12 hidden'>
                    {
                    navItems.map(({ link, path }) => (
                        <Link to={link} spy={true} smooth={true} offset={-100} key={path} className='text-gray-500 
                        hover:text-orange-700 first:font-medium cursor-pointer'>{link}</Link>
                         
                    ))}
                </ul>
                {/* mobil device */}
                {/* <div className='md:hidden' >
                    <button className='text-3xl text-neutralDGrey focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? <Faxmark className='h-6 w-6 ' /> : <FaBars className='h-6 w-6 ' />
                        }
                    </button>
                </div> */}
            </div>
        </nav>
    </header>
  );
};

export default Navbar;
