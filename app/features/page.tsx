"use client";
import { Features as Features8 } from '@/components/ui/features-8'
import { Features as Features10 } from '@/components/ui/features-10'
import { Timeline } from '@/components/ui/timeline'
import React, { useRef } from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const timelineData = [
    {
      title: "Ingest",
      content: <p>Upload a ZIP of your product shots—or sync direct from S3.</p>,
    },
    {
      title: "Scan",
      content: <p>Our reverse‑image AI sweeps every Amazon marketplace for look‑alikes.</p>,
    },
    {
      title: "Review",
      content: <p>Side‑by‑side diff shows price gap, image similarity %, and seller data.</p>,
    },
    {
      title: "Fire",
      content: <p>One click pushes DMCA & Brand‑Registry notices to Amazon’s portal.</p>,
    },
    {
      title: "Track",
      content: <p>Dashboards show takedown status, buy‑box recovery, and revenue saved.</p>,
    },
  ];

export default function FeaturesPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div className="bg-black text-white" ref={containerRef}>
            <ScrollProgress
                containerRef={containerRef as React.RefObject<HTMLDivElement>}
                className="fixed top-0 left-0 h-1 bg-white z-20"
            />
            <div className="relative">
                <div className="relative z-10 max-w-4xl mx-auto p-4 pt-32 pb-96">
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-5xl text-center">Find, Flag, Fire.</h1>
                        <p className="text-center text-neutral-400 mt-4">
                            <em>AI-powered brand protection for Amazon sellers.</em>
                        </p>
                    </div>
                    <hr className="my-8 border-neutral-800" />
                    <div className="mb-8">
                        <p className="text-lg text-neutral-300 text-center">
                            Sever hunts down copy-cat listings, auto-generates airtight DMCA & Brand-Registry notices, and
                            tracks enforcement—all in one dashboard.
                        </p>
                    </div>
                    <hr className="my-8 border-neutral-800" />
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl text-center">How Sever Works</h2>
                        <Timeline data={timelineData} />
                    </div>
                    <hr className="my-8 border-neutral-800" />
                    <Features8 />
                    <hr className="my-8 border-neutral-800" />
                    <Features10 />
                    <hr className="my-8 border-neutral-800" />
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl text-center">Ready to cut the clones?</h2>
                        <p className="text-xl text-neutral-300">Start a 7-day free trial—no credit card required.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
