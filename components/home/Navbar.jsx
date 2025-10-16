"use client"
import { motion } from "framer-motion";
import MenuItems from "./MenuItems";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from 'next/link'
import Image from "next/image";


const navItems = [
    { name: "Home", href: '/' },
    { name: "Features", href: '/feature' },
    { name: "Templates", href: '/template' },
    {name: "Pricing", href: '/pricing'}
]



export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <motion.nav
            initial = {{y:-100}}
            animate = {{y:0}}
            className='fixed w-full z-50 bg-[#270A63E5]/40 backdrop-filter backdrop-blur-lg transition-all duration-300 ease-out px-5 sm:px-10 text-white'>
            <div className="flex items-center justify-between">

                <div className="max-width-7xl  py-3 sm:px-5">
                    <motion.div
                        whileHover={{scale: 1.05}}
                        className='flex items-center  font-bold transition-all duration-200 ease-in-out hover:cursor-pointer'>
                        <Image src='/glimmer.png' alt="glimmer_logo" width={150} height={60}/>
                    </motion.div>
                </div>
            
                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex justify-between font-bold items-center text-gray-50 gap-6  px-4 py-2">
                        {
                        navItems.map((items, i) => (
                              <MenuItems key={items.name} index={i} href={items.href}>{items.name}</ MenuItems>
                        ))
                        }
                    </div>
                    
                    <div className='flex gap-2'>
                        <Link href='/register' className="border border-white bg-gradient-to-r from-[#050505]/60 to-[#270A63E5]/20 py-2 px-7 rounded-full">
                           Get Started
                        </Link>
                        <Link href='/login' className="border border-white py-2 px-7 rounded-full">
                            Login
                        </Link>
                    </div>
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden inline p-2 rounded-lg bg-[#5E17EB]/5 hover:bg-[#270A63E5] transition-colors">
                       {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-white"/>
                        ): (
                            <Bars3Icon className="h-6 w-6 text-white"/>
                        )}
                </button>
            </div>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate = {{opacity:1, y:0}}
                    className="lg:hidden mt-4 pb-4 space-y-4"
                >
                    {
                        navItems.map((item) =>(
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-white hover:text-[#270A63E5] hover:bg-gray-50 rounded-lg transition-colors font-bold"
                            >
                                {item.name}
                        </a>
                        ))
                    }

                    <div className="pt-4 border-t border-[#270A63E5]">
                        <div className='flex gap-6'>
                        <Link href='/login' className="border border-white py-2 px-7 rounded-full">
                            Login
                        </Link>
                        <Link href='/register' className="border border-white bg-gradient-to-r from-[#050505]/60 to-[#270A63E5]/20  py-2 px-7 rounded-full ">
                            Get Started
                        </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}