"use client";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";
import "./globals.css";
import { MiniNavbar } from "@/components/ui/mini-navbar";
import { SplineScene } from "@/components/ui/splite";
import { usePathname } from "next/navigation";
import { CanvasRevealEffect } from "@/components/ui/sign-in-flow-1";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
          signInUrl="/signin"
          signUpUrl="/signup"
        >
          {isMounted && isHomePage && (
            <>
              {/* Background canvas effect */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-black"
                  colors={[[255, 255, 255], [255, 255, 255]]}
                  dotSize={2}
                />
              </div>
              
              {/* Spline scene in the background, allows pointer events */}
              <div className="absolute inset-0 z-10">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>

              {/* Gradient overlay on top of Spline, but behind UI */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>
            </>
          )}
          
          {/* All UI elements are in a container with a high z-index */}
          <div className="relative z-30 flex flex-col h-screen pointer-events-none">
            <MiniNavbar />
            <main className={`flex-grow flex flex-col ${isMounted && isHomePage ? '' : 'pointer-events-auto'}`}>{children}</main>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
