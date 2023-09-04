import React, { useState } from 'react';
import logo from '../images/react.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Button from './Button'
import { signInWithGoogle } from '../authentication/Firebase';

const Navbar = () => {
    console.log('Navbar rendering');
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full fixed z-10 bg-black opacity-90">
            <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
                <a href="/" className="flex items-center justify-center text-white text-lg cursor-pointer">
                    <img src={logo} alt="Logo" className="hidden md:block w-8 h-8 lg:w-14 lg:h-14" />
                    Flavor<span>Verse</span>
                </a>
                <ul className='hidden md:flex text-white gap-6'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/#recipes'>Explore</a>
                    </li>
                    <li>
                        <a href='/favourite'>Favourites</a>
                    </li>
                </ul>
                <Button title = "Sign in"
                containerStyle = 'hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]' />
                <button className='block md:hidden text-white text-xl'
                    onClick={() => {setOpen(prev => !prev )}}
                >
                    {open ? <AiOutlineClose /> : <HiMenuAlt3 /> }
                </button>
            </nav>
            <div className={`${open ? "flex lg:hidden" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`} >
                <a href='/' >Home</a>
                <a href='/recipes' >Explore</a>
                <a href='/favourite' >Favourites</a>                
            </div>
        </header>
    );
}

export default Navbar;
