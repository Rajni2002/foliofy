"use client"
import React, { useEffect, useState } from 'react';
import { NavbarProps, NavItem } from '../../@types/props-types';
import { cn } from '@/lib/utils';
import { Amaranth } from 'next/font/google';
import { MoonStar, X, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const amaranth = Amaranth({ weight: "700", style: "italic", subsets: ["latin"] })

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
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false); // to safely show the UI for the 
    const [showMenu, setShowMenu] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <nav className="bg-inherit border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <span className={cn("text-3xl font-bold whitespace-nowrap text-black dark:text-white", amaranth.className)}>{name}</span>
                </a>
                <div className='flex'>
                    <div className={cn("md:block md:w-auto h-full backdrop-blur-xl", showMenu ? "block absolute left-0 right-0 w-100 top-[12%]" : "hidden w-full")}>
                        <ul className="text-center font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-inherit">
                            {nav_items.map(({ name, path }) => (
                                <li key={Math.random()}>
                                    <a href={path} className={cn("block py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500", currPath === path ? "text-black dark:text-white after:content-['•'] after:text-red-500 after:relative after:top-4 after:right-6" : "")} aria-current="page">{name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="self-center hover:cursor-pointer hover:opacity-75 mx-3" onClick={() => setTheme((theme === "dark" ? "light" : "dark"))}>
                        {
                            theme && (theme === "dark") ?
                                <MoonStar color='white' />
                                :
                                <Sun color='black' />
                        }
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className='md:hidden'
                        onClick={() => setShowMenu(prev => !prev)}
                    >
                        {
                            showMenu ? <X color={theme === "dark" ? 'white' : "black"} />
                                :
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke={theme === "dark" ? 'white' : "black"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 6h15M1 13h15" />
                                </svg>
                        }
                    </Button>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;