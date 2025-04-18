"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingProps {
  className?: string;
}

export function Loading({ className }: LoadingProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the loading indicator after a delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onAnimationComplete={() => setIsVisible(false)}
        className="flex flex-col items-center"
      >
        <div className="relative h-16 w-16">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#5B402D] opacity-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-t-[#5B402D] border-r-transparent border-b-transparent border-l-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm font-work-sans text-[#5B402D] dark:text-[#D9C4A3]"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}
