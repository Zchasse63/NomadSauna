import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { PreloadImages } from "@/components/ui/preload-images";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { sourceSerif, sourceSans, workSans } from "./fonts";

// Add Open Graph metadata
export const metadata: Metadata = {
  title: "Nomad Sauna Co. | Handcrafted Saunas for Modern Living",
  description: "Premium custom-built saunas crafted with sustainable materials and traditional Finnish techniques for an authentic experience anywhere.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nomadsaunaco.com",
    title: "Nomad Sauna Co. | Handcrafted Saunas for Modern Living",
    description: "Premium custom-built saunas crafted with sustainable materials and traditional Finnish techniques for an authentic experience anywhere.",
    siteName: "Nomad Sauna Co.",
    images: [
      {
        url: "https://nomadsaunaco.com/images/og/og-image.png?v=20240420",
        width: 1200,
        height: 630,
        alt: "Nomad Sauna Co. Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomad Sauna Co. | Handcrafted Saunas for Modern Living",
    description: "Premium custom-built saunas crafted with sustainable materials and traditional Finnish techniques for an authentic experience anywhere.",
    images: ["https://nomadsaunaco.com/images/og/og-image.png?v=20240420"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-no-bg.png" type="image/png" />
        {/* Additional explicit meta tags for social media platforms */}
        <meta property="og:image" content="https://nomadsaunaco.com/images/og/og-image.png?v=20240420" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nomad Sauna Co. Logo" />
        <meta name="twitter:image" content="https://nomadsaunaco.com/images/og/og-image.png?v=20240420" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          sourceSans.variable,
          sourceSerif.variable,
          workSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <PreloadImages images={["/images/showcase/IMG_7359.jpeg"]} />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
