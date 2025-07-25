"use client";

import { Pricing } from "@/components/ui/pricing";
import React, { useRef } from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const demoPlans = [
  {
    name: "Launch",
    price: "49",
    yearlyPrice: "490",
    period: "per month",
    features: [
      "Monitor up to 10 ASINs (weekly scan)",
      "2 GB secure image vault",
      "One-click DMCA & Brand-Registry notices",
      "Email alerts + CSV export",
      "1 team seat",
      "48-hour support SLA",
    ],
    description: "Built for solo sellers & side-hustlers",
    buttonText: "Start 7-day free trial",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "Scale",
    price: "199",
    yearlyPrice: "1990",
    period: "per month",
    features: [
      "Includes everything in Launch, plus:",
      "Monitor up to 50 ASINs (daily scan)",
      "20 GB high-res image vault",
      "Auto-re-fire repeat offenders",
      "Competitor price tracker",
      "Up to 5 team seats",
      "Priority email & chat (12-hour SLA)",
      "Full API access for custom dashboards",
    ],
    description: "Perfect for growing FBA brands",
    buttonText: "Get Started",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    yearlyPrice: "Custom",
    period: "",
    features: [
      "Includes everything in Scale, plus:",
      "Unlimited ASINs & marketplaces",
      "Hourly scans with reverse-image AI",
      "Unlimited image vault & cold-storage backups",
      "Dedicated account manager",
      "Unlimited team seats with SSO & RBAC",
      "SOC-2 & on-prem deployment options",
      "1-hour Slack support",
      "Custom contract & SLA",
    ],
    description: "Tailored for global brand-protection teams",
    buttonText: "Book a call",
    href: "/contact",
    isPopular: false,
  },
];

function PricingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-black text-white" ref={containerRef}>
      <ScrollProgress
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        className="fixed top-0 left-0 h-1 bg-white z-20"
      />
      <div className="relative">
        <div className="relative z-10 max-w-6xl mx-auto p-4 pt-32 pb-96">
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl text-center">Pricing</h1>
            <p className="text-center text-neutral-400 mt-4">
              <em>Stop copycats. Start firing off takedowns.</em>
            </p>
          </div>
          <hr className="my-4 border-neutral-800" />
          <div className="mt-4">
            <Pricing
              plans={demoPlans}
              title={``}
              description={`Every plan includes Amazon-wide monitoring and automated DMCA filing.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
