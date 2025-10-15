"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden pb-25">
        <div className="flex items-center justify-center pb-5">
            <h5 className="font-bold border-b-4  border-[#270A63E5]">What Our Users Says</h5>
        </div>
        <p className="text-center mb-15 px-2">
            Hear from professionals who have transformed their online presence with GlimmerID
        </p>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The profile banner I designed with GlimmerID instantly transformed my LinkedIn presence and attracted more connection requests. The AI-generated bio was surprisingly on point, capturing my professional essence perfectly without any of the usual fuss.",
    name: "Alex Johnson",
    title: "Freelance Web Developer",
  },
  {
    quote:
      "As a consultant, I need to project immediate authority, and this platform delivered high-quality visuals effortlessly. The bio generator provided a concise, impactful 'About' section that immediately converted profile visitors into serious inquiries.",
    name: "Maria Sanchez",
    title: "Business Consultant",
  },
  {
    quote:
      "Job searching felt generic until I used GlimmerID to revitalize my Twitter banner and bio. The tailored, professional branding made my application stand out significantly in a crowded field of less visually appealing candidates, leading to several interviews.",
    name: "Ben Carter",
    title: "Senior Marketing Manager",
  },
  {
    quote:
      "I was stuck writing my own bio, but the AI wizard solved that problem instantly with a personalized, high-impact copy. Now my profile looks polished, cohesive, and far more trustworthy, which is crucial for building credibility with my clients.",
    name: "Chloe Davies",
    title: "Content Creator & Writer",
  },
  {
    quote:
      "The simple tools allowed me to create an incredibly sophisticated and engaging LinkedIn banner in less than ten minutes. The overall visual upgrade has genuinely increased my perceived value, and my engagement metrics have clearly followed suit.",
    name: "David Lee",
    title: "UX/UI Designer",
  },
  {
    quote:
      "Finally, a service that merges powerful AI copy generation with beautiful visual design for social platforms. The results are a cohesive brand image across both my LinkedIn and Twitter profiles, saving me countless hours of frustrating design work.",
    name: "Emily Clark",
    title: "Career Coach",
  },
  {
    quote:
      "I needed to look sharp for potential employers, and GlimmerID was the perfect tool to achieve a polished, professional finish. The automated process made upgrading my banner and bio feel seamless and provided a clear, competitive edge.",
    name: "Frank White",
    title: "Recent Graduate & Job Seeker",
  },
  {
    quote:
      "The custom banners are far more professional than anything I could have created manually with standard graphic tools. This platform is an absolute game-changer for anyone serious about elevating their personal brand in a highly competitive digital space.",
    name: "Grace Hall",
    title: "Recruitment Specialist",
  },
  {
    quote:
      "The AI bio generation is incredibly intuitive and perfectly captured my tone and professional background. Paired with the striking banner, my profile is now much more memorable, ensuring recruiters take me seriously from the very first glance.",
    name: "Henry Moore",
    title: "Data Scientist",
  },
  {
    quote:
      "GlimmerID made personal branding feel easy and accessible, not like a complicated design project that required expert skills. The high-quality results speak for themselves, directly impacting my visibility and credibility as a small business owner.",
    name: "Ivy Chen",
    title: "E-commerce Founder",
  },
];