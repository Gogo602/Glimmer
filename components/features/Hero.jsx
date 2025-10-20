"use client";
import React from "react";
import { FaMobile, FaUserCheck } from "react-icons/fa";
import { IoEyeOutline, IoNewspaperOutline, IoSparklesSharp } from "react-icons/io5";
import { FaCircleArrowDown } from "react-icons/fa6";
import { Button } from "../ui/moving-border";


export default function FeaturesHero() {
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
                      Unleash Your <br className="" /> Professional  Brand
                </h1>
            </div>  
                         
            <div className="pt-5">
                <p className="text-center sm:px-10">
                      GlimmerID's suite of AI-powered tools helps you create an impactful social media profiles that get
                      <br className="hidden md:inline" /> you noticed. Design stunning banners and write compelling bio's in minutes.
                </p>
            </div>
              
            <div className="md:flex items-center w-full pt-10">
                <div className="w-full flex items-center  justify-center gap-10 text-yellow-600">
                    <Button
                        borderRadius="1.75rem"
                        className="bg-black"
                    > 
                      <IoEyeOutline  size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2 z-5"/>
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
                <div className="w-full flex  items-center pt-5 justify-center gap-10 text-yellow-600">
                    <Button
                        borderRadius="1.75rem"
                        className="bg-black"
                    > 
                      <IoNewspaperOutline  size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2 z-5"/>
                    </Button>
                    
                    <Button
                        borderRadius="1.75rem"
                        className="bg-black"
                    >
                      <FaMobile  size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>
                    </Button>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-black"
                    >
                      <FaUserCheck  size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
