"use client";
import React from "react";
import WhyUs from "./WhyUs";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Faq from "./Faq";


export default function Body() {
  return (
    <div className="w-full h-auto z-20 text-white">
        <div className="">
            <WhyUs /> 
            <HowItWorks /> 
            <Testimonials />
            <Faq />
        </div>
    </div>
  );
}
