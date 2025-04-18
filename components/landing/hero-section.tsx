"use client";

import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5 will-change-transform">
        <OptimizedImage
          src="/images/showcase/IMG_7359.jpeg"
          alt="Sauna background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 80rem"
          quality={60}
          className="object-cover blur-[2px] transform-gpu"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-[#5B402D]/20 bg-[#D9C4A3]/10 px-3 text-xs text-[#1E1A18] transition-all ease-in hover:cursor-pointer hover:bg-[#D9C4A3]/20 group gap-1 translate-y-0 animate-fade-in opacity-0 will-change-transform" style={{animationDelay: '100ms'}}>
        <TextShimmer className="inline-flex items-center justify-center">
          <span>🔥 Handcrafted Saunas for Modern Living</span>{" "}
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
      </div>
      <h1 className="bg-gradient-to-br dark:from-[#E6D3AF] from-[#1E1A18] from-30% dark:to-[#D9C4A3]/90 to-[#5B402D]/90 bg-clip-text py-6 text-5xl font-serif font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-0 animate-fade-in opacity-0 will-change-transform" style={{animationDelay: '200ms'}}>
        Nomad Sauna Co.
      </h1>
      <h2 className="bg-gradient-to-br dark:from-[#D9C4A3] from-[#5B402D] from-30% dark:to-[#E6D3AF]/90 to-[#1E1A18]/90 bg-clip-text py-4 text-3xl font-serif font-medium leading-none tracking-tighter text-transparent text-balance sm:text-4xl md:text-5xl translate-y-0 animate-fade-in opacity-0 will-change-transform" style={{animationDelay: '300ms'}}>
        Experience the warmth of
        <br className="hidden md:block" /> traditional sauna culture.
      </h2>
      <p className="mb-16 mt-4 text-lg tracking-tight text-[#5B402D] dark:text-[#D9C4A3] md:text-xl text-balance translate-y-0 animate-fade-in opacity-0 will-change-transform" style={{animationDelay: '400ms'}}>
        We craft premium barrel and pod saunas using sustainable materials
        <br className="hidden md:block" /> and traditional Finnish techniques for an authentic experience
        anywhere.
      </p>
      <Link href="#showcase">
        <Button className="translate-y-0 animate-fade-in gap-1 rounded-lg text-[#E6D3AF] dark:text-[#1E1A18] opacity-0 ease-in-out mb-8 font-work-sans will-change-transform" style={{animationDelay: '500ms'}}>
          <span>Explore Our Saunas </span>
          <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </Button>
      </Link>
    </section>
  );
}
