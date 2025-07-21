"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Squares } from "./squares-background";
import { motion } from "framer-motion";

const JobListing = ({ title, salary, location, experience, applyLink }: { title: string; salary: string; location: string; experience: string; applyLink: string; }) => {
  return (
    <motion.div 
      className="bg-white/5 p-6 rounded-lg border border-white/10 w-full max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl text-white">{title}</h3>
          <p className="text-white/70">{salary}</p>
          <p className="text-white/50 text-sm">{location} &middot; {experience}</p>
        </div>
        <button onClick={() => window.location.href = applyLink} className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-white/90 transition-colors">
          Apply
        </button>
      </div>
    </motion.div>
  );
};

export const CareersPage = () => {
  const jobs = [
    {
      title: "Machine Learning Engineer",
      salary: "$450,000 Base Salary",
      location: "San Francisco",
      experience: "4+ Years Experience with OpenAI CLIP and Pinecone",
      applyLink: "mailto:matthew@sever.software",
    },
    {
      title: "Cloud Engineer",
      salary: "$250,000 Base Salary",
      location: "San Francisco",
      experience: "6+ Years Experience with Supabase and Node.js micro-services",
      applyLink: "mailto:matthew@sever.software",
    },
  ];

  return (
    <div className={cn("flex w-full flex-col min-h-screen bg-black relative")}>
      <Squares className="absolute inset-0 z-0" direction="up" />
      <div className="relative z-10 flex flex-col flex-1 items-center justify-center p-4 space-y-8 pt-24">
        <div className="text-center">
          <h1 className="text-4xl text-white">Join Our Team</h1>
          <p className="text-white/70 mt-2">We're looking for talented individuals to help us build the future.</p>
        </div>
        {jobs.map((job, index) => (
          <JobListing key={index} {...job} />
        ))}
         <Link href="/" className="text-white/50 hover:text-white transition-colors mt-8">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};
