"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import  Link  from 'next/link'


export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative">
        <div className="px-5">
            <div className="flex items-center justify-center my-5">
                  <h6 className="border border-[#270A63E5] bg-[#270A63E5]/30 px-6 py-1 rounded-full text-[11px]">
                      AI POWER BANNER & BIO GENERATOR
                  </h6>
            </div>
            <div className="space-y-5"> 
                <h1
                className="md:text-4xl text-3xl lg:text-5xl font-bold text-center text-white">
                    Turn Your Profile <br className=""/> Into a Personal Brand
                </h1>
            </div>               
            <div className="pt-5">
                <p className="text-center">
                    With AI-driven design, GlimmerID helps you create stunning LinkedIn banners and compelling bios in seconds, no design skills required.
                </p>
                <div className='flex items-center justify-center py-5 gap-6'>
                    <Link href="/login"
                        className='py-2 px-5  bg-[#270A63E5] border border-white rounded-full md:px-10'>
                        Get Started 
                        </Link>
                        <Link href="/#"
                        className='py-2 px-5  bg-[#270A63E5] border border-white rounded-full md:px-10'>
                        Contribute
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
