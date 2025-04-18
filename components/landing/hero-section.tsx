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
      <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-[#5B402D]/40 bg-[#5B402D]/10 px-3 text-xs text-[#1E1A18] transition-all ease-in hover:cursor-pointer hover:bg-[#5B402D]/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
        <TextShimmer className="inline-flex items-center justify-center">
          <span>🔥 Handcrafted Saunas for Modern Living</span>{" "}
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
      </div>
      <h1 className="text-[#1E1A18] py-6 text-5xl font-serif font-medium leading-none tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Nomad Sauna Co.
      </h1>
      <h2 className="text-[#5B402D] py-4 text-3xl font-serif font-medium leading-none tracking-tighter text-balance sm:text-4xl md:text-5xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
        Experience the warmth of
        <br className="hidden md:block" /> traditional sauna culture.
      </h2>
      <p className="mb-16 mt-4 text-lg tracking-tight text-[#1E1A18]/80 dark:text-[#D9C4A3] md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        We craft premium barrel and pod saunas using sustainable materials
        <br className="hidden md:block" /> and traditional Finnish techniques for an authentic experience
        anywhere.
      </p>
      <Link href="#showcase">
        <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg bg-[#5B402D] text-[#E6D3AF] hover:bg-[#5B402D]/90 dark:bg-[#E6D3AF] dark:text-[#1E1A18] dark:hover:bg-[#E6D3AF]/90 opacity-0 ease-in-out [--animation-delay:600ms] mb-8 font-work-sans">
          <span>Explore Our Saunas </span>
          <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </Button>
      </Link>
    </section>
  );
}
