import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "What types of saunas do you offer?",
    answer: "We specialize in traditional Finnish-style saunas, with our main offerings being barrel saunas, pod saunas, and custom-built sauna rooms. Each is handcrafted using premium Western Red Cedar and can be customized to your specific needs and space requirements."
  },
  {
    question: "How long does it take to build and install a sauna?",
    answer: "The timeline varies depending on the type and complexity of the sauna. Typically, our barrel and pod saunas take 4-6 weeks from order to delivery. Custom sauna rooms may take 8-12 weeks. Installation usually takes 1-2 days for pre-built models and 3-5 days for custom installations."
  },
  {
    question: "Do I need special electrical requirements for a sauna?",
    answer: "Yes, most of our saunas require a dedicated 220V/40-60 amp circuit. Our electric heaters typically need professional installation by a licensed electrician. We provide detailed electrical specifications with each order and can recommend qualified electricians in your area if needed."
  },
  {
    question: "Can your saunas be used outdoors?",
    answer: "Absolutely! Our barrel and pod saunas are specifically designed for outdoor use and are built to withstand various weather conditions. We use weather-resistant materials and treatments to ensure durability and longevity in outdoor environments."
  },
  {
    question: "What is the difference between a traditional and infrared sauna?",
    answer: "Traditional saunas heat the air to high temperatures (typically 150-195°F) using a stove or heater, creating a dry or steam environment depending on water use. Infrared saunas use infrared heaters to emit radiation that directly warms your body without significantly heating the air, operating at lower temperatures (120-140°F). We specialize in traditional saunas for their authentic experience and deeper heat penetration."
  },
  {
    question: "How much maintenance does a sauna require?",
    answer: "Our saunas are designed for minimal maintenance. Regular care includes wiping down benches after use, occasional deep cleaning with a mild solution of water and baking soda, and periodic treatment of exterior wood surfaces (for outdoor models). We provide detailed care instructions with every sauna purchase."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer several financing options to make your sauna purchase more accessible. We partner with reputable financing providers to offer plans with competitive rates and flexible terms. Please contact us for current financing details."
  },
  {
    question: "What warranty do you provide?",
    answer: "We stand behind our craftsmanship with comprehensive warranties. Our standard warranty includes 5 years on structural components, 2 years on heaters and electrical components, and 1 year on accessories. Extended warranty options are also available for purchase."
  },
  {
    question: "Can you help with permits and regulations?",
    answer: "Yes, we're familiar with common building codes and permit requirements for sauna installations. While ultimately the responsibility for permits lies with the property owner, we provide documentation and specifications to assist with the permit process and can offer guidance based on our experience in various regions."
  },
  {
    question: "Do you offer sauna relocation services?",
    answer: "Yes, we offer professional sauna relocation services for both our own saunas and those built by others. Our team can disassemble, transport, and reassemble your sauna at its new location, ensuring it's properly set up and functioning correctly."
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#1E1A18] dark:text-[#E6D3AF]">
          Frequently Asked Questions
        </h1>

        <p className="text-xl text-[#5B402D] dark:text-[#D9C4A3] mb-12">
          Find answers to common questions about our saunas, services, and the sauna experience. If you don\'t see your question answered here, please don\'t hesitate to contact us.
        </p>

        <div className="space-y-8 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#5B402D]/20 rounded-lg p-6 bg-[#E6D3AF]/10 dark:bg-[#1E1A18]/10"
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#1E1A18] dark:text-[#E6D3AF]">
                {faq.question}
              </h3>
              <p className="text-[#5B402D] dark:text-[#D9C4A3]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#5B402D]/10 dark:bg-[#1E1A18]/30 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1E1A18] dark:text-[#E6D3AF]">
            Still have questions?
          </h2>
          <p className="text-[#5B402D] dark:text-[#D9C4A3] mb-6">
            Our team is here to help you find the perfect sauna solution for your needs.
          </p>
          <Link href="/contact">
            <Button className="bg-[#5B402D] text-[#E6D3AF] hover:bg-[#5B402D]/90 font-work-sans px-6 py-2">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
