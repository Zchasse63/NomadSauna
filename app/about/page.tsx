import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#1E1A18] dark:text-[#E6D3AF]">
          About Nomad Sauna Co.
        </h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-[#5B402D] dark:text-[#D9C4A3] mb-6">
            Founded on a passion for authentic sauna experiences, Nomad Sauna Co. brings the time-honored tradition of Finnish sauna culture to modern homes across the country.
          </p>

          <div className="my-12 aspect-video relative rounded-xl overflow-hidden">
            <Image
              src="/images/showcase/IMG_7359.jpeg"
              alt="Nomad Sauna Co. craftsmanship"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-3xl font-serif font-semibold mb-4 text-[#1E1A18] dark:text-[#E6D3AF]">Our Story</h2>
          <p className="text-[#5B402D] dark:text-[#D9C4A3] mb-6">
            Nomad Sauna Co. was born from a simple belief: that the restorative power of traditional sauna should be accessible to everyone, regardless of where they live. Our founder, after experiencing the profound benefits of regular sauna use during travels in Finland, returned home determined to create authentic, high-quality saunas that could bring this centuries-old wellness practice to modern homes.
          </p>
          <p className="text-[#5B402D] dark:text-[#D9C4A3] mb-6">
            What began as a small workshop crafting custom barrel saunas has grown into a dedicated team of artisans committed to preserving the authentic sauna experience while embracing modern design and sustainability.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-[#E6D3AF]/20 dark:bg-[#1E1A18]/20 p-6 rounded-xl">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#1E1A18] dark:text-[#E6D3AF]">Our Mission</h3>
              <p className="text-[#5B402D] dark:text-[#D9C4A3]">
                To craft exceptional saunas that honor traditional techniques while meeting the needs of modern lifestyles, bringing the authentic sauna experience to homes across America.
              </p>
            </div>
            <div className="bg-[#E6D3AF]/20 dark:bg-[#1E1A18]/20 p-6 rounded-xl">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#1E1A18] dark:text-[#E6D3AF]">Our Values</h3>
              <ul className="text-[#5B402D] dark:text-[#D9C4A3] space-y-2">
                <li>• Craftsmanship: Meticulous attention to detail in every sauna we build</li>
                <li>• Authenticity: True to Finnish sauna traditions and techniques</li>
                <li>• Sustainability: Responsibly sourced materials and eco-conscious practices</li>
                <li>• Community: Sharing the culture and benefits of sauna with all</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-semibold mb-4 text-[#1E1A18] dark:text-[#E6D3AF]">Our Approach</h2>
          <p className="text-[#5B402D] dark:text-[#D9C4A3] mb-6">
            Every Nomad sauna is handcrafted using premium Western Red Cedar and traditional Finnish building techniques. We believe in creating saunas that not only look beautiful but deliver an authentic experience that promotes wellness and relaxation.
          </p>
          <p className="text-[#5B402D] dark:text-[#D9C4A3] mb-6">
            Our team works closely with each client to understand their needs, space constraints, and aesthetic preferences. Whether you're looking for a compact barrel sauna for your backyard or a custom-built sauna room for your home, we approach each project with the same dedication to quality and authenticity.
          </p>

          <div className="my-12 aspect-video relative rounded-xl overflow-hidden">
            <Image
              src="/images/showcase/IMG_7362.jpeg"
              alt="Nomad Sauna Co. craftsmanship"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-3xl font-serif font-semibold mb-4 text-[#1E1A18] dark:text-[#E6D3AF]">Our Commitment</h2>
          <p className="text-[#5B402D] dark:text-[#D9C4A3] mb-6">
            At Nomad Sauna Co., we're committed to not just building saunas, but to educating our community about the rich traditions and health benefits of regular sauna use. We believe that the sauna is more than just a luxury—it's a pathway to better physical and mental wellbeing.
          </p>
          <p className="text-[#5B402D] dark:text-[#D9C4A3] mb-10">
            We stand behind every sauna we build with comprehensive warranties and ongoing support, ensuring that your Nomad sauna will be a source of wellness and joy for years to come.
          </p>

          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-[#5B402D] text-[#E6D3AF] hover:bg-[#5B402D]/90 font-work-sans px-8 py-6 text-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
