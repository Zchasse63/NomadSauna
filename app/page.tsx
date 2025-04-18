"use client";

import HeroSection from "@/components/landing/hero-section";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ShowcaseSection from "@/components/landing/showcase-section";
import ServicesSection from "@/components/landing/services-section";
import CtaSection from "@/components/landing/cta-section";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.src = "/images/showcase/IMG_7359.jpeg";

    img.onload = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    // Fallback in case image loading fails
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative">
      {isLoading ? (
        <div className="mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
          <Skeleton className="mx-auto h-7 w-64 rounded-full" />
          <Skeleton className="mx-auto mt-6 h-20 w-3/4" />
          <Skeleton className="mx-auto mt-4 h-16 w-2/3" />
          <Skeleton className="mx-auto mt-4 h-24 w-1/2" />
          <Skeleton className="mx-auto mt-8 h-10 w-40 rounded-lg" />
        </div>
      ) : (
        <HeroSection />
      )}
      <ShowcaseSection />
      <ServicesSection />
      <CtaSection />
    </main>
  );
}
