import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlteredCraft | Writing & Teaching on AI-Assisted Development",
  description:
    "Sam Keen writes and teaches about AI-assisted software development. Weekly newsletter on Substack and hands-on workshops on Maven for developers building with AI.",
  keywords: [
    "AI-assisted development",
    "Claude Code",
    "context engineering",
    "AI developer newsletter",
    "AI workshops",
    "Maven workshops",
    "software development",
    "Sam Keen",
  ],
  authors: [{ name: "Sam Keen" }],
  openGraph: {
    title: "AlteredCraft | Writing & Teaching on AI-Assisted Development",
    description:
      "Sam Keen writes and teaches about AI-assisted software development. Newsletter and live workshops for developers building with AI.",
    url: "https://alteredcraft.com",
    siteName: "AlteredCraft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlteredCraft | Writing & Teaching on AI-Assisted Development",
    description:
      "Sam Keen writes and teaches about AI-assisted software development. Newsletter and live workshops for developers building with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
