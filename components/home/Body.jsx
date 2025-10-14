"use client";
import React from "react";
import WhyUs from "./WhyUs";
import HowItWorks from "./HowItWorks";


export default function Body() {
  return (
    <div className="w-full h-auto z-20">
        <div className="">
            <WhyUs /> 
            <HowItWorks /> 
        </div>
    </div>
  );
}
