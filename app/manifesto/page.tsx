"use client";
import React, { useRef } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { useIsDesktop } from "@/hooks/use-is-desktop";

const manifestoText = [
  {
    title: "The Sever Manifesto",
    subtitle: "Cut the clones. Protect the originals.",
  },
  {
    title: "1. Why We Exist",
    content: [
      "Every day, creators ship their best ideas to Amazon—only to watch cheap imitators hijack their images, undercut their price, and siphon the Buy Box.",
      "Sever draws a hard line: your intellectual property is not a free buffet.",
      "We built Sever to give independent brands the same fire-power that studios and billion-dollar labels already wield—without the lawyers, the ticket queues, or five-figure retainers.",
    ],
  },
  {
    title: "2. Our Mission",
    blockquote: "Instant, affordable, and unwavering defense of original work.",
    content: [
      "If someone rips your photos, we find them.",
      "If someone counterfeits your listing, we sever it.",
      "If a platform drags its feet, we persist until the copy-cat is gone.",
    ],
  },
  {
    title: "3. Principles We Code By",
    table: [
      {
        principle: "Proactive, not reactive",
        meaning:
          "The bot hunts clones before they steal sales—you shouldn’t have to babysit your catalog.",
      },
      {
        principle: "One-click power",
        meaning:
          "We do the crawling, the evidence packs, the legal boilerplate. You just review and send.",
      },
      {
        principle: "Price clarity",
        meaning:
          "Flat monthly tiers. No “per-incident” surprises. No 18-month contracts.",
      },
      {
        principle: "Human in the loop",
        meaning:
          "AI does the heavy lifting; a person (you) decides. It’s how we keep false takedowns near zero.",
      },
      {
        principle: "Audit-ready by default",
        meaning:
          "Every notice, screenshot, and signature is hashed and archived—bullet-proof if you’re challenged.",
      },
      {
        principle: "Platform-agnostic DNA",
        meaning:
          "We start with Amazon because it hurts the most. Tomorrow: Etsy, AliExpress, TikTok—same click.",
      },
      {
        principle: "Privacy & respect",
        meaning:
          "Data lives in encrypted buckets, deleted on request, never sold. Period.",
      },
      {
        principle: "Constant iteration",
        meaning:
          "Clone tactics evolve; so does Sever. Weekly model retrains, daily patch cycles, zero complacency.",
      },
    ],
  },
  {
    title: "4. Our Pledge to Brands",
    list: [
      "90%+ detection coverage on your live hero images, or next month is on us.",
      "24-hour dispatch guarantee on all approved notices.",
      "Transparent metrics: clones found, notices sent, revenue leakage halted—always visible in your dashboard.",
      "You own the data and can export it any time.",
      "Fair-use respect: reviewer warnings on potential parody, resale, commentary. We fight pirates, not fair speech.",
    ],
  },
  {
    title: "5. What We Fight",
    list: [
      "Screenshot thieves",
      "Pixel-shift “near” copies",
      "Keyword-stuffed hijackers",
      "Under-priced counterfeit bundles",
      "Sourcing-agent copycats who beat you to the shelf",
    ],
    outro: "If it misleads the shopper and drains your margin, it’s on our radar.",
  },
  {
    title: "6. Invitation",
    content: [
      "If you believe originality matters—if you’re done losing sleep (and margin) to lazy impersonators—join the beta. Let’s sever the clones together.",
    ],
  },
];

export default function ManifestoPage() {
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
          {manifestoText.map((section, index) => (
            <div key={index} className="mb-12">
              <h1 className="text-3xl md:text-5xl text-center">
                {section.title}
              </h1>
              {section.subtitle && (
                <p className="text-center text-neutral-400 mt-4">
                  <em>{section.subtitle}</em>
                </p>
              )}
              {section.blockquote && (
                <blockquote className="border-l-4 border-neutral-700 pl-4 my-8">
                  <p className="text-xl text-neutral-200">
                    {section.blockquote}
                  </p>
                </blockquote>
              )}
              {section.content?.map((text, i) => (
                <p key={i} className="text-neutral-300 my-4">
                  {text}
                </p>
              ))}
              {section.table && (
                <div className="overflow-x-auto my-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="border-b border-neutral-800 px-4 py-2 text-center">
                          #
                        </th>
                        <th className="border-b border-neutral-800 px-4 py-2">
                          Principle
                        </th>
                        <th className="border-b border-neutral-800 px-4 py-2">
                          What it means for you
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      {section.table.map((row, i) => (
                        <tr key={i}>
                          <td className="border-b border-neutral-800 px-4 py-2 text-center">
                            {`0${i + 1}`}
                          </td>
                          <td className="border-b border-neutral-800 px-4 py-2">
                            {row.principle}
                          </td>
                          <td className="border-b border-neutral-800 px-4 py-2">
                            {row.meaning}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.list && (
                <ul className="list-disc space-y-2 my-8 pl-5">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.outro && (
                <p className="text-neutral-300 my-4">{section.outro}</p>
              )}
              {index < manifestoText.length - 1 && (
                <hr className="my-8 border-neutral-800" />
              )}
            </div>
          ))}
          <p className="text-center mt-8">
            <a
              href="https://sever.software#signup"
              className="inline-block px-8 py-3 text-lg text-black bg-white rounded-full hover:bg-neutral-200 transition-colors duration-300"
            >
              Join the Beta →
            </a>
          </p>
          <p className="text-center text-sm text-neutral-500 mt-8">
            <em>Last updated: July 20, 2025</em>
          </p>
        </div>
      </div>
    </div>
  );
}
