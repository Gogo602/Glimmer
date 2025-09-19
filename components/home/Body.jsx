"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Features from "./Features";


export default function Body() {
  return (
    <div className="w-full h-auto bg-[#270A63E5]">
        <div className="">
            <div className="w-full h-[155rem] sm:h-[90rem] lg:h-[50rem] relative">
                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.5}
                    maxSize={3}
                    particleDensity={60}
                    className="w-full h-full"
                      particleColor="#ffffff"
                />
                <div className="absolute top-0 w-full">
                  <div className="flex items-center justify-center">
                    <div>
                        <Features />
                    </div>
                  </div>
              </div>
              </div>  
        </div>
    </div>
  );
}
