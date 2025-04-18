"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";

type Interval = "month" | "year";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price / 100).toFixed(decimals);
};
const demoPrices = [
  {
    id: "product_1",
    name: "Barrel Sauna",
    description: "Traditional barrel-shaped sauna for 2-4 people",
    features: [
      "Western Red Cedar construction",
      "Electric heater included",
      "Interior LED lighting",
      "Tempered glass door",
      "Bench seating for 2-4 people",
      "1-year warranty",
    ],
    monthlyPrice: 499900,
    yearlyPrice: 499900,
    isMostPopular: false,
  },
  {
    id: "product_2",
    name: "Pod Sauna",
    description: "Modern pod-shaped sauna with panoramic window",
    features: [
      "Premium Cedar construction",
      "Electric or wood-burning heater",
      "Panoramic tempered glass window",
      "Interior & exterior LED lighting",
      "Bench seating for 2-3 people",
      "Bluetooth audio system",
      "2-year warranty",
    ],
    monthlyPrice: 699900,
    yearlyPrice: 699900,
    isMostPopular: true,
  },
  {
    id: "product_3",
    name: "Outdoor Cabin Sauna",
    description: "Spacious cabin-style sauna for 4-6 people",
    features: [
      "Premium Cedar construction",
      "Electric or wood-burning heater",
      "Changing room included",
      "Interior & exterior LED lighting",
      "Bench seating for 4-6 people",
      "Bluetooth audio system",
      "Insulated for all climates",
      "3-year warranty",
    ],
    monthlyPrice: 899900,
    yearlyPrice: 899900,
    isMostPopular: false,
  },
  {
    id: "product_4",
    name: "Custom Design",
    description: "Fully customized sauna built to your specifications",
    features: [
      "Custom size and shape",
      "Choice of premium woods",
      "Electric or wood-burning heater",
      "Custom lighting options",
      "Custom bench configurations",
      "Smart home integration available",
      "Premium audio options",
      "5-year warranty",
    ],
    monthlyPrice: 1299900,
    yearlyPrice: 1299900,
    isMostPopular: false,
  },
];

export default function PricingSection() {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    setIsLoading(false);
  };

  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-serif font-bold tracking-tight text-[#5B402D] dark:text-[#D9C4A3]">
            Our Saunas
          </h4>

          <h2 className="text-5xl font-serif font-bold tracking-tight text-[#1E1A18] dark:text-[#E6D3AF] sm:text-6xl">
            Handcrafted with care.
          </h2>

          <p className="mt-6 text-xl leading-8 text-[#5B402D]/80 dark:text-[#D9C4A3]">
            Choose from our <strong>premium collection</strong> of traditional Finnish-inspired saunas,
            built with sustainable materials and designed to bring the authentic sauna
            experience to your home or property.
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <span className="inline-block whitespace-nowrap rounded-full bg-[#5B402D] px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-[#E6D3AF] dark:bg-[#D9C4A3] dark:text-[#1E1A18]">
            FREE SHIPPING & INSTALLATION ✨
          </span>
        </div>

        <div className="mx-auto grid w-full justify-center sm:grid-cols-2 lg:grid-cols-4 flex-col gap-4">
          {demoPrices.map((price, idx) => (
            <div
              key={price.id}
              className={cn(
                "relative flex max-w-[400px] flex-col gap-8 rounded-2xl border p-4 text-black dark:text-white overflow-hidden",
                {
                  "border-2 border-[var(--color-one)] dark:border-[var(--color-one)]":
                    price.isMostPopular,
                }
              )}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">
                    {price.name}
                  </h2>
                  <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                    {price.description}
                  </p>
                </div>
              </div>

              <motion.div
                key={`${price.id}-${interval}`}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 12,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-row gap-1"
              >
                <span className="text-4xl font-serif font-bold text-[#1E1A18] dark:text-[#E6D3AF]">
                  $
                  {toHumanPrice(price.monthlyPrice, 0)}
                </span>
              </motion.div>

              <Button
                className={cn(
                  "group relative w-full gap-2 overflow-hidden text-lg font-work-sans font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                )}
                disabled={isLoading}
                onClick={() => void onSubscribeClick(price.id)}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                {(!isLoading || (isLoading && id !== price.id)) && (
                  <p>View Details</p>
                )}

                {isLoading && id === price.id && <p>Loading...</p>}
                {isLoading && id === price.id && (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                )}
              </Button>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
              {price.features && price.features.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {price.features.map((feature: any, idx: any) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                    >
                      <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
