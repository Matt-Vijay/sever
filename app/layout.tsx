"use client";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";
import "./globals.css";
import { MiniNavbar } from "@/components/ui/mini-navbar";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Preloader from '@/components/ui/preloader';
import { motion } from 'motion/react';
import { LoadingProvider, useLoading } from '@/contexts/LoadingContext';

const inter = Inter({ subsets: ["latin"] });

function SiteLayout({ children }: { children: React.ReactNode }) {
  const { isLoading, setIsLoading } = useLoading();

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
      >
        {/* All UI elements are in a container with a high z-index */}
        <div className="relative z-50 flex flex-col h-screen">
          <MiniNavbar />
          <main className="flex-grow flex flex-col">{children}</main>
        </div>
      </motion.div>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black`}>
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          appearance={{
            baseTheme: dark,
          }}
          signInUrl="/signin"
          signUpUrl="/signup"
        >
          <LoadingProvider>
            <SiteLayout>{children}</SiteLayout>
          </LoadingProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
