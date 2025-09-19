"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import  Link  from 'next/link'


export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-[#270A63E5] flex items-center justify-center overflow-hidden relative">
          <div className="pt-15 px-5">
            <div className="space-y-5">
                <h1
                className="md:text-4xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
                    Turn Your Profile <br className=""/> Into a Personal Brand
                </h1>
            </div>
            <div className="lg:w-[50rem] h-60 relative ">
                {/* Gradients */}
                <div
                    className="absolute inset-x-40 md:inset-x-80 top-2 bg-gradient-to-r from-transparent bg-[#2AC2FF] to-transparent h-[40%] w-[20%] blur-3xl rounded-full"/>
                <div
                      className="absolute inset-x-40 md:inset-x-80 top-20 bg-gradient-to-r from-transparent bg-[#2AC2FF] to-transparent h-[40%] w-[20%] blur-3xl rounded-full" />
                
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
                      className="absolute inset-0 w-full h-full bg-[#270A63E5] [mask-image:radial-gradient(370px_290px_at_top,transparent_30%,white)]">
                      
                </div>
                <div className=" absolute top-0 pt-5">
                    <p className="text-center">
                        With AI-driven design, GlimmerID helps you create stunning LinkedIn banners and compelling bios in seconds, no design skills required.
                    </p>
                    <div className='flex items-center justify-center py-5 gap-6'>
                        <Link href="/login"
                            className='py-3 px-5  bg-[#5E17EB] border border-white rounded-md md:px-10'>
                            Get Started 
                          </Link>
                          <Link href="/#"
                            className='py-3 px-5  bg-[#5E17EB] border border-white rounded-md md:px-10'>
                            Contribute
                        </Link>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  );
}
