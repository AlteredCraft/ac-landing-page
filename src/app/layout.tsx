import type { Metadata } from "next";
import { Inter, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
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

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${plusJakartaSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
