"use client"
import React, { useState } from 'react';
import { NavbarProps, NavItem } from '../@types/prop-types';
import { cn } from '@/lib/utils';
import { Amaranth } from 'next/font/google';
const amaranth = Amaranth({ weight: "700", style: "italic", subsets: ["latin"] })
import { X } from 'lucide-react';

const nav_items: NavItem[] = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Connect",
        path: "/connect"
    },
    {
        name: "Reads",
        path: "/reads"
    },
    {
        name: "Works",
        path: "/works"
    },
    {
        name: "Story Map",
        path: "/story-map"
    },
]

const Navbar: React.FC<NavbarProps> = ({ name, currPath }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <span className={cn("text-3xl font-bold whitespace-nowrap dark:text-white", amaranth.className)}>{name}</span>
                </a>
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden ease-linear"
                    onClick={() => setShowMenu(prev => !prev)}
                >
                    <span className="sr-only">Open main menu</span>
                    {
                        showMenu ? <X />
                            :
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 6h15M1 13h15" />
                            </svg>
                    }
                </button>
                <div className={cn("md:block md:w-auto", showMenu ? "block absolute left-0 right-0 w-100 top-[12%]" : "hidden w-full")}>
                    <ul className="text-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {nav_items.map(({ name, path }) => (
                            <li key={Math.random()}>
                                <a href={path} className={cn("block py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500", currPath === path ? "text-black after:content-['•'] after:text-red-500 after:relative after:top-4 after:right-6" : "")} aria-current="page">{name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;