"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Features from "./Features";


export default function Body() {
  return (
    <div className="w-full h-auto bg-black">
        <div className="">
            <div className="w-full h-[150rem] sm:h-[80rem] lg:h-[50rem] relative">
                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.5}
                    maxSize={3}
                    particleDensity={60}
                    className="w-full h-full"
                      particleColor="#004D1E"
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
