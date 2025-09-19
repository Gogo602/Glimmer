import React from "react";
import Hero from '../components/home/Hero'
import Navbar from '../components/home/Navbar';
import Body from "@/components/home/Body";


export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="">
        <Hero />
        <Body />
      </main>  
    </div>
  );
}
