"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaArrowRight } from "react-icons/fa";
import CountUp from "@/components/ui/CountUp";
import { useLoading } from "@/contexts/LoadingContext";
import { SplineScene } from "@/components/ui/splite";
import { CanvasRevealEffect } from "@/components/ui/sign-in-flow-1";
import { motion } from "motion/react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { isLoading } = useLoading();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Success! You've been added to the waitlist.");
        setEmail("");
      } else {
        const data = await response.json();
        setMessage(data.error || "An error occurred. Please try again.");
      }
    } catch {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="relative h-full">
      {/* Layer 1: Background canvas effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[[255, 255, 255], [255, 255, 255]]}
          dotSize={2}
        />
      </div>

      {/* Layer 2: Spline Scene */}
      <motion.div
        className="absolute inset-0 z-10 mt-52 md:mt-0 scale-150 md:scale-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
      >
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>

      {/* Layer 3: Gradient Overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

      {/* Layer 4: UI Content */}
      <div className="relative z-30 flex flex-col items-center justify-start md:justify-center h-full text-center pointer-events-none pt-48 md:pt-0">
        <div className="w-full max-w-4xl p-4">
          <div>
            <h1 className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-sans font-bold">
              Stop Amazon Copycats. Fast.
            </h1>
            <p className="text-neutral-300 max-w-lg mx-auto my-4 text-sm">
              Tired of losing sales to knock-offs? We find and eliminate copycat listings using AI-powered DMCA takedowns. Join the waitlist to get early access.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex justify-center items-center mt-4 pointer-events-auto">
            <Input
              type="email"
              placeholder="Enter your email to join the waitlist"
              className="w-full max-w-md bg-transparent border-white/20 text-white placeholder:text-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit"
              className="ml-2 px-4 py-2 bg-white text-black rounded-md transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              <FaArrowRight />
            </button>
          </form>
          {message && <p className="mt-4 text-sm text-neutral-400">{message}</p>}
          <div className="mt-6 text-sm text-neutral-400">
            Join <CountUp from={0} to={471} duration={2.5} className="font-bold text-white" startWhen={!isLoading} /> businesses on the Sever waitlist.
          </div>
        </div>
      </div>
    </div>
  );
}
