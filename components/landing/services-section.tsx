"use client";

import { motion } from "framer-motion";
import { GiWoodCabin, GiHouse, GiCargoShip, GiToolbox } from 'react-icons/gi';

const services = [
  {
    id: 1,
    title: "Custom Sauna Building",
    description: "Fully customized saunas designed and built to your exact specifications and space requirements.",
    icon: <GiWoodCabin className="h-12 w-12" />
  },
  {
    id: 2,
    title: "Sauna Refinishing",
    description: "Restore and refinish your existing sauna to bring back its original beauty and functionality.",
    icon: <GiHouse className="h-12 w-12" />
  },
  {
    id: 3,
    title: "Sauna Relocation",
    description: "Professional disassembly, transportation, and reassembly of your sauna to a new location.",
    icon: <GiCargoShip className="h-12 w-12" />
  },
  {
    id: 4,
    title: "Pre-made Sauna Installation",
    description: "Expert assembly and installation of pre-purchased sauna kits from any manufacturer.",
    icon: <GiToolbox className="h-12 w-12" />
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-[#1E1A18]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E1A18] dark:text-[#E6D3AF] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-[#5B402D] dark:text-[#D9C4A3] max-w-3xl mx-auto">
            From custom builds to installation and maintenance, we offer comprehensive sauna services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#E6D3AF]/20 dark:bg-[#1E1A18]/20 p-6 rounded-xl border border-[#5B402D]/20 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <div className="mb-4 p-4 rounded-full bg-[#D9C4A3]/30 text-[#5B402D] dark:text-[#D9C4A3] flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-[#1E1A18] dark:text-[#E6D3AF]">
                {service.title}
              </h3>
              <p className="text-[#5B402D] dark:text-[#D9C4A3] mb-4">
                {service.description}
              </p>
              <button className="mt-auto px-4 py-2 bg-[#5B402D] text-[#E6D3AF] rounded-lg hover:bg-[#5B402D]/90 transition-colors text-sm font-work-sans">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
