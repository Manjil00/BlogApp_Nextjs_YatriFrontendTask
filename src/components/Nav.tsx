'use client';
import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"; //ICONS
import Link from 'next/link';

function Nav(){
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNavMenu = () => setIsNavOpen(!isNavOpen);
    
    return (
        <nav className="flex justify-between px-6 py-3 z-50 relative">
        <div className="flex justify-start items-center">
            <h1 className='text-black ml-6  text-sm md:text-2xl
    cursor-pointer flex justify-center items-center'>Blogapp</h1>
        </div>
        
        <div className={`bg-white md:bg-transparent absolute min-h-[30vh] left-0 top-[90%] w-full p-5 flex flex-col  md:static md:flex md:min-h-fit md:w-auto gap-9 text-sm ${isNavOpen ? 'block' : 'hidden'}`}>
            <ul className=" cursor-pointer flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-evenly md:text-base font-writingFont">
            <Link href="/"><li className="hover:text-purple-800">Home</li></Link>
            <Link href="/Blogpage"><li className="hover:text-purple-800">Blogs</li></Link>
            </ul>
        </div>
        <div>
            <button onClick={toggleNavMenu} className="md:hidden">
                {
                isNavOpen ? <RxCross1 className="text-2xl text-black" /> :
                <RxHamburgerMenu className={`text-2xl text-black `} />
                }
            </button>
        </div>
    </nav>
    )
    }

export default Nav;
