import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export const Nav = () => {
    const [isMenu, setisMenu] = useState(false);
    const toggleMenu = () => {
        setisMenu(!isMenu);
    };

    return (
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full  mx-auto max-w-[1200px]">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND</h1>
                    <ul className="hidden md:flex">
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platform</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black mr-4">Sign In</button>
                    <button className="px-8 py-3">Sign UP</button>
                </div>
                <div className="md:hidden ">
                    {isMenu ? <XMarkIcon className="w-5 " onClick={toggleMenu} /> : <Bars3Icon className="w-5 " onClick={toggleMenu} />}
                </div>
            </div>
            
            <ul className={`${!isMenu && 'hidden' } md:hidden absolute bg-zinc-200 w-full px-8`}>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platform</li>
                <li>Pricing</li>
            </ul>
        </div>
    );
};
