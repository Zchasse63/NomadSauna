"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function ShowcaseSection() {
  const [selectedImage, setSelectedImage] = useState(0);

  // Local image paths from the public/images/showcase directory
  const showcaseImages = [
    "/images/showcase/IMG_7359.jpeg",
    "/images/showcase/IMG_7362.jpeg",
    "/images/showcase/IMG_7364.jpeg",
    "/images/showcase/IMG_7366.jpeg"
  ];

  return (
    <section id="showcase" className="py-20 bg-[#E6D3AF]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#1E1A18] dark:text-[#E6D3AF] mb-4">
            Our Craftsmanship
          </h2>
          <p className="text-xl text-[#5B402D] dark:text-[#D9C4A3] max-w-3xl mx-auto">
            Take a closer look at our premium custom-built sauna, handcrafted with sustainable materials
            and designed to bring natural light and comfort to your sauna experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-4">
          {/* Main image display */}
          <div
            className="relative aspect-square overflow-hidden rounded-xl"
            style={{
              boxShadow: `0 0 0 1px rgba(91, 64, 45, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
            }}
          >
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative"
            >
              <OptimizedImage
                src={showcaseImages[selectedImage]}
                alt={`Nomad Sauna Co. showcase image ${selectedImage + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={selectedImage === 0}
                className="object-cover"
                quality={90}
              />
            </motion.div>
          </div>

          {/* Image thumbnails and description */}
          <div className="space-y-6 pl-2 md:pl-4">
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {showcaseImages.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 m-1"
                >
                  {/* Outer container with fixed dimensions */}
                  <button
                    onClick={() => setSelectedImage(index)}
                    className={`group block w-24 h-24 rounded-lg relative transition-all duration-300 ${
                      selectedImage === index
                        ? "z-10 transform scale-105"
                        : "opacity-80"
                    }`}
                    style={{
                      boxShadow: selectedImage === index
                        ? `0 0 0 2px #5B402D, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
                        : `0 0 0 1px rgba(91, 64, 45, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05)`
                    }}
                  >
                    {/* Image container */}
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                      <motion.div
                        className="w-full h-full"
                        initial={{ opacity: 0.8 }}
                        animate={{
                          opacity: selectedImage === index ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <OptimizedImage
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold text-[#1E1A18] dark:text-[#E6D3AF]">
                Custom-Made Sauna
              </h3>
              <p className="text-[#5B402D] dark:text-[#D9C4A3]">
                Our signature custom-built sauna blends traditional craftsmanship with modern design elements.
                Crafted with premium Western Red Cedar, this spacious sauna features a skylight and viewing windows
                that bring in abundant natural light, creating a truly relaxing environment with comfortable seating for 4-6 people.
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {[
                  "Premium Western Red Cedar",
                  "Electric Heater",
                  "Skylight & Viewing Windows",
                  "Tempered Glass Door",
                  "Spacious Seating for 4-6",
                  "Natural Ambient Lighting"
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-[#5B402D] dark:text-[#D9C4A3]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-[#5B402D] dark:text-[#D9C4A3]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-[#5B402D] text-[#E6D3AF] rounded-lg hover:bg-[#5B402D]/90 transition-colors font-work-sans">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
