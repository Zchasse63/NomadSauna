"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours."
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
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
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#1E1A18] dark:text-[#E6D3AF]">
          Contact Us
        </h1>

        <p className="text-xl text-[#5B402D] dark:text-[#D9C4A3] mb-12">
          Have questions about our saunas or services? We're here to help. Fill out the form below or use our contact information to get in touch with our team.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1E1A18] dark:text-[#E6D3AF]">
              Get In Touch
            </h2>

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="bg-[#E6D3AF]/10 dark:bg-[#1E1A18]/20 border-[#5B402D]/20 font-sans"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className="bg-[#E6D3AF]/10 dark:bg-[#1E1A18]/20 border-[#5B402D]/20 font-sans"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">
                  Phone (optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  className="bg-[#E6D3AF]/10 dark:bg-[#1E1A18]/20 border-[#5B402D]/20 font-sans"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-work-sans font-medium text-[#1E1A18] dark:text-[#E6D3AF]">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or questions"
                  className="h-32 bg-[#E6D3AF]/10 dark:bg-[#1E1A18]/20 border-[#5B402D]/20 font-sans"
                  required
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
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1E1A18] dark:text-[#E6D3AF]">
              Contact Information
            </h2>

            <div className="space-y-6 text-[#5B402D] dark:text-[#D9C4A3]">
              <div>
                <h3 className="text-lg font-serif font-medium mb-2 text-[#1E1A18] dark:text-[#E6D3AF]">
                  Email
                </h3>
                <p className="font-sans">info@nomadsaunaco.com</p>
              </div>

              <div>
                <h3 className="text-lg font-serif font-medium mb-2 text-[#1E1A18] dark:text-[#E6D3AF]">
                  Phone
                </h3>
                <p className="font-sans">(555) 123-4567</p>
              </div>

              <div>
                <h3 className="text-lg font-serif font-medium mb-2 text-[#1E1A18] dark:text-[#E6D3AF]">
                  Hours
                </h3>
                <p className="font-sans">Monday - Friday: 9am - 5pm</p>
                <p className="font-sans">Saturday: 10am - 3pm</p>
                <p className="font-sans">Sunday: Closed</p>
              </div>

              <div>
                <h3 className="text-lg font-serif font-medium mb-2 text-[#1E1A18] dark:text-[#E6D3AF]">
                  Showroom
                </h3>
                <p className="font-sans">123 Sauna Way</p>
                <p className="font-sans">Cedarville, CA 95000</p>
                <p className="font-sans mt-2">By appointment only</p>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-serif font-medium mb-2 text-[#1E1A18] dark:text-[#E6D3AF]">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/nomadsaunaco" className="text-[#5B402D] dark:text-[#D9C4A3] hover:text-[#1E1A18] dark:hover:text-[#E6D3AF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://facebook.com/nomadsaunaco" className="text-[#5B402D] dark:text-[#D9C4A3] hover:text-[#1E1A18] dark:hover:text-[#E6D3AF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="https://pinterest.com/nomadsaunaco" className="text-[#5B402D] dark:text-[#D9C4A3] hover:text-[#1E1A18] dark:hover:text-[#E6D3AF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
