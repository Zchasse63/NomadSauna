"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-[#1E1A18] dark:text-[#E6D3AF] sm:text-5xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-[#5B402D] dark:text-[#D9C4A3]">
          We apologize for the inconvenience. Please try again or contact us if the problem persists.
        </p>
        <div className="mt-8">
          <Button 
            onClick={reset}
            className="bg-[#5B402D] text-[#E6D3AF] hover:bg-[#5B402D]/90 font-work-sans"
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
