"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import  Link  from 'next/link'


export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center overflow-hidden relative">
        <div className="pt-25 px-5">
            <div className="space-y-5">
                <h1
                className="md:text-4xl text-4xl lg:text-5xl font-bold text-center text-white relative z-20">
                    Create Stunning Banner Instantly!
                </h1>
                
            </div>
            <div className="lg:w-[50rem] h-60 relative">
                {/* Gradients */}
                <div
                    className="absolute inset-x-5 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent bg-green-500  to-transparent h-px w-3/4" />
                <div
                    className="absolute inset-x-40 md:inset-x-80 top-2 bg-gradient-to-r from-transparent bg-green-500 to-transparent h-[40%] w-[20%] blur-3xl rounded-full"/>
                <div
                    className="absolute inset-x-60 lg:inset-x-70 top-0 bg-gradient-to-r from-transparent bg-green-700  to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.2}
                    maxSize={1}
                    particleDensity={800}
                    className="w-full h-full"
                      particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div
                    className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(370px_290px_at_top,transparent_30%,white)]">
                </div>
                <div className=" absolute top-0 pt-5">
                    <p className="text-center">
                        Design captivating banners that reflect your brand and personality in minutes, no design skills needed
                    </p>
                    <div className='flex items-center justify-center py-5 gap-6'>
                        <Link href="/login"
                            className='py-3 px-8  bg-black/50 border border-green-600 rounded-md md:px-10'>
                            Get Started 
                          </Link>
                          <Link href="/#"
                            className='py-3 px-8  bg-black/50 border border-green-600 rounded-md md:px-10'>
                            Contribute
                        </Link>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  );
}
