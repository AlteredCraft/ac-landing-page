import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlteredCraft | Applied AI Guidance for Software Teams",
  description:
    "Applied AI guidance for the people who build software. Weekly insights, workshops, and strategic advisory from Sam Keen.",
  keywords: [
    "AI",
    "software development",
    "engineering leadership",
    "AI workshops",
    "AI strategy",
    "developer newsletter",
  ],
  authors: [{ name: "Sam Keen" }],
  openGraph: {
    title: "AlteredCraft | Applied AI Guidance for Software Teams",
    description:
      "Applied AI guidance for the people who build software. Weekly insights, workshops, and strategic advisory.",
    url: "https://alteredcraft.com",
    siteName: "AlteredCraft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlteredCraft | Applied AI Guidance for Software Teams",
    description:
      "Applied AI guidance for the people who build software. Weekly insights, workshops, and strategic advisory.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
