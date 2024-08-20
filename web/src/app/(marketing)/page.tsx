"use client";

import Hero from "@/components/hero";
import dynamic from "next/dynamic";

const CobeGlobe = dynamic(() => import("@/components/cobe"));
const Features = dynamic(() => import("@/components/features"));

export default function Home() {
  return (
    <div className="">
      <div className="w-full max-w-5xl mx-auto">
        <Hero />
      </div>
      <div className="w-full min-h-screen">
        <Features />
      </div>
      {/* <div className="hidden md:block w-full">
        <Workflow />
      </div> */}
      <div className="w-full">
        <CobeGlobe />
      </div>
    </div>
  );
}
