// Navbar.js
import React, { useState } from 'react';
import logo from '../images/react.png';

const Navbar = () => {
    console.log('Navbar rendering');
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full fixed z-10 bg-black opacity-90">
            <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
                <a href="/" className="flex items-center justify-center text-white text-lg cursor-pointer">
                    <img src={logo} alt="Logo" className="w-8 h-8 lg:w-14 lg:h-14" />
                    Flavor<span>Verse</span>
                </a>
                <ul className='hidden md:flex text-white gap-6'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/recipes'>Explore</a>
                    </li>
                    <li>
                        <a href='/favourite'>Favourites</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
