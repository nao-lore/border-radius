import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "CSS Border Radius Generator - Visual Radius Builder | border-radius",
  description:
    "Free online CSS border-radius generator. Visually design rounded corners with independent corner controls, elliptical radius support, and one-click CSS copy. Presets for pill, circle, blob, and more.",
  keywords: [
    "border radius generator",
    "css border radius",
    "rounded corners generator",
    "border radius tool",
    "css radius",
    "corner radius",
  ],
  authors: [{ name: "border-radius" }],
  openGraph: {
    title: "CSS Border Radius Generator - Visual Radius Builder",
    description:
      "Free online tool to visually create CSS border-radius values. Independent corner controls, elliptical radius, and instant copy.",
    url: "https://border-radius.vercel.app",
    siteName: "border-radius",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Border Radius Generator - Visual Radius Builder",
    description:
      "Free online tool to visually create CSS border-radius values. Independent corner controls, elliptical radius, and instant copy.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://border-radius.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CSS Border Radius Generator",
              description:
                "Free online CSS border-radius generator with visual preview. Design rounded corners with independent corner controls and elliptical radius support.",
              url: "https://border-radius.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Visual border-radius preview",
                "Independent corner controls",
                "Elliptical radius support",
                "Unit toggle (px, %, em)",
                "Shape presets (pill, circle, blob, leaf, egg)",
                "One-click CSS copy",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
