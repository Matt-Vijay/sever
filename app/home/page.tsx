"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <div className="flex-grow flex items-center justify-center pointer-events-none">
      <div className="max-w-2xl w-full mx-auto p-4 text-center">
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
      </div>
    </div>
  );
}
