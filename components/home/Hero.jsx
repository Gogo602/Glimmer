"use client";
import React from "react";
import  Link  from 'next/link'
import { FaUserEdit } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";
import { FaCircleArrowDown } from "react-icons/fa6";
import { Button } from "../ui/moving-border";


export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative">
        <div className="px-5">
            <div className="flex items-center justify-center my-5">
                <h6 className="border border-[#270A63E5] bg-black/30 px-6 py-1 rounded-full text-[11px] text-yellow-600">
                    AI POWERED BANNER & BIO GENERATOR
                </h6>
            </div>
            
            <div className="space-y-5"> 
                <h1
                className="md:text-4xl text-3xl lg:text-5xl font-bold text-center text-white">
                      Turn Your Profile <br className="" /> Into a Personal Brand
                </h1>
            </div>  
                         
            <div className="pt-5">
                <p className="text-center sm:px-10">
                    With AI-driven design, GlimmerID helps you create stunning LinkedIn banners and compelling bios in seconds, no design skills required.
                </p>
                <div className='flex items-center justify-center py-5 gap-6'>
                    <Link href="/login"
                        className='py-2 px-5  bg-gradient-to-r from-[#270A63E5]/50 to-[#050505]/20 border border-white rounded-full md:px-10'>
                        Get Started 
                    </Link>
                    <Link href="/#"
                        className='py-2 px-5  bg-gradient-to-r from-[#050505]/20 to-[#270A63E5]/50  border border-white rounded-full md:px-10'>
                        Contribute
                    </Link>
                </div>
            </div>
              
              <div className="w-full flex items-center pt-15 justify-center gap-10 text-yellow-600">
                <Button
                    borderRadius="1.75rem"
                    className="bg-black"
                >
                  <FaUserEdit size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2 z-5"/>
                </Button>
                <Button
                    borderRadius="1.75rem"
                    className="bg-black"
                >
                  <IoSparklesSharp size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>
                </Button>
                <Button
                    borderRadius="1.75rem"
                    className="bg-black"
                >
                  <FaCircleArrowDown size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>
                </Button>
            </div>
        </div>
    </section>
  );
}
