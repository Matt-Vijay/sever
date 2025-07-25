"use client";
import React, { useRef } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { useIsDesktop } from "@/hooks/use-is-desktop";

const telemetryText = [
  {
    title: "Telemetry",
    subtitle: "Sever keeps data simple. Here’s what we track and why:",
  },
  {
    title: "What We Collect",
    list: [
      "Uploaded Product Images – Full‑resolution, exactly as you provide them, because that’s how we detect clones accurately.",
      "Detection Results – URLs, screenshots, and similarity scores from our scanning process.",
      "Basic Usage Data – Logins, approvals, and takedown requests (timestamps only).",
      "Email & Account Info – Your account email and plan tier.",
    ],
  },
  {
    title: "Why We Collect It",
    list: [
      "To run accurate image searches and detect knock‑offs.",
      "To generate legal notices with clear evidence.",
      "To keep your dashboard and history accurate.",
    ],
  },
  {
    title: "What We Don’t Do",
    list: [
      "We don’t sell your data.",
      "We don’t share your product images with any third party, except as part of DMCA notices you approve.",
      "We don’t track your browsing or ads.",
    ],
  },
  {
    title: "Storage & Security",
    list: [
      "All product images and data are stored securely (encrypted at rest and in transit).",
      "Only you (and any team members you invite) can access your data.",
      "You can delete your images and history anytime from your dashboard.",
    ],
  },
  {
    title: "Transparency",
    content: [
      "We keep things minimal — no hidden tracking.",
      "If we ever make changes to how we handle data, we’ll update this page and let you know.",
    ],
  },
  {
    title: "Questions?",
    content: ["Email privacy@sever.software."],
  },
];

export default function TelemetryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  return (
    <div className="bg-black text-white" ref={containerRef}>
      <ScrollProgress
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        className="fixed top-0 left-0 h-1 bg-white z-20"
      />
      <div className="relative">
        {isDesktop && <BackgroundBeams className="fixed" />}
        <div className="relative z-10 max-w-4xl mx-auto p-4 pt-32 pb-96">
          {telemetryText.map((section, index) => (
            <div key={index} className="mb-12">
              <h1 className="text-3xl md:text-5xl text-center">
                {section.title}
              </h1>
              {section.subtitle && (
                <p className="text-center text-neutral-400 mt-4">
                  <em>{section.subtitle}</em>
                </p>
              )}
              {section.content?.map((text, i) => (
                <p key={i} className="text-neutral-300 my-4">
                  {text}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc space-y-2 my-8 pl-5">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {index < telemetryText.length - 1 && (
                <hr className="my-8 border-neutral-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
