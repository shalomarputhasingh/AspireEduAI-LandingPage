import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aspireeduai.com"), // Placeholder domain
  title: {
    default: "AspireEdu AI | The Unified Operating System for Institutions",
    template: "%s | AspireEdu AI",
  },
  description: "Stop juggling disconnected tools. AspireEdu AI provides a single, intelligent platform for attendance, fees, faculty management, and instant reporting.",
  keywords: ["School Management System", "AI Education", "College ERP", "Institution Management Software", "Indian Schools Software", "AspireEdu AI"],
  authors: [{ name: "Aspire Code AI" }],
  creator: "Aspire Code AI",
  publisher: "Aspire Code AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AspireEdu AI | The Unified Operating System for Institutions",
    description: "Replace 6 legacy tools with 1 intelligent platform. Automate attendance, fees, and reports instantly.",
    url: "https://aspireeduai.com",
    siteName: "AspireEdu AI",
    images: [
      {
        url: "/logo.png", // In a real app, this should be a wide 1200x630 OG image
        width: 800,
        height: 600,
        alt: "AspireEdu AI Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AspireEdu AI | The Unified Operating System for Institutions",
    description: "Replace legacy ERPs with an AI-powered platform for schools and colleges.",
    creator: "@AspireEduAI",
    images: ["/logo.png"], // Placeholder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
