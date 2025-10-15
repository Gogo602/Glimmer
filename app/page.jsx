import React from "react";
import Hero from '../components/home/Hero'
import Body from "@/components/home/Body";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Dark Noise Colored Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
        background: "#000000",
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
          radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
          radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
        `,
        backgroundSize: "20px 20px, 30px 30px, 25px 25px",
        backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      />

      <main className="relative text-white">
        <Hero />
        <Body />
      </main>  
    </div>
    
  );
}


