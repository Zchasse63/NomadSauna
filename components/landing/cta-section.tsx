"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { toast } from "sonner";

export default function CallToActionSection() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get the form element
      const form = e.target as HTMLFormElement;

      // Submit the form using Netlify's form handling
      const formData = new FormData(form);

      // Use the fetch API to submit the form
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast.success("Consultation request submitted!", {
          description: "We'll get back to you within 24 hours."
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          interest: "",
          message: ""
        });
        form.reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Something went wrong", {
        description: "Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-20 bg-[#E6D3AF]/10 dark:bg-[#1E1A18]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-serif font-bold mb-4 text-[#1E1A18] dark:text-[#E6D3AF]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to Experience the Warmth?
            </motion.h2>
            <motion.p
              className="text-xl text-[#5B402D] dark:text-[#D9C4A3] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get in touch with our sauna experts to start your journey toward authentic Finnish sauna experiences
            </motion.p>
          </div>

          <motion.div
            ref={formRef}
            className="grid md:grid-cols-2 gap-8 bg-white dark:bg-[#1E1A18]/40 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-[#1E1A18] dark:text-[#E6D3AF]">
                  Contact Us
                </h3>
                <p className="text-[#5B402D] dark:text-[#D9C4A3] mb-6">
                  Fill out this form and one of our sauna specialists will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#5B402D]/10 dark:bg-[#E6D3AF]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#5B402D] dark:text-[#D9C4A3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">Email</p>
                    <p className="text-[#5B402D] dark:text-[#D9C4A3]">info@nomadsaunaco.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#5B402D]/10 dark:bg-[#E6D3AF]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#5B402D] dark:text-[#D9C4A3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">Phone</p>
                    <p className="text-[#5B402D] dark:text-[#D9C4A3]">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#5B402D]/10 dark:bg-[#E6D3AF]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#5B402D] dark:text-[#D9C4A3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">Location</p>
                    <p className="text-[#5B402D] dark:text-[#D9C4A3]">Cedarville, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <form
              className="space-y-4"
              onSubmit={handleSubmit}
              name="consultation"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="consultation" />
              <div className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="block text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    name="firstName"
                    placeholder="John"
                    className="bg-[#E6D3AF]/10 dark:bg-[#1E1A18]/20 border-[#5B402D]/20 font-sans"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="last-name" className="block text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">
                    Last Name
                  </label>
                  <Input
                    id="last-name"
                    name="lastName"
                    placeholder="Doe"
                    className="bg-[#E6D3AF]/10 dark:bg-[#1E1A18]/20 border-[#5B402D]/20 font-sans"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-[#E6D3AF]/10 dark:bg-[#1E1A18]/20 border-[#5B402D]/20 font-sans"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="(555) 123-4567"
                  className="bg-[#E6D3AF]/10 dark:bg-[#1E1A18]/20 border-[#5B402D]/20 font-sans"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="block text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">
                  I&apos;m interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full rounded-md border border-[#5B402D]/20 bg-[#E6D3AF]/10 dark:bg-[#1E1A18]/20 px-3 py-2 text-sm font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option value="">Select an option</option>
                  <option value="barrel-sauna">Barrel Sauna</option>
                  <option value="pod-sauna">Pod Sauna</option>
                  <option value="custom-sauna">Custom Sauna</option>
                  <option value="sauna-refinishing">Sauna Refinishing</option>
                  <option value="sauna-relocation">Sauna Relocation</option>
                  <option value="sauna-installation">Pre-made Sauna Installation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  className="h-24 bg-[#E6D3AF]/10 dark:bg-[#1E1A18]/20 border-[#5B402D]/20 font-sans"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#5B402D] text-[#E6D3AF] hover:bg-[#5B402D]/90 font-work-sans"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Request Consultation"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
