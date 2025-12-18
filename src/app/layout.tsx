import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

/**
 * Font configuration
 * 
 * Inter: Primary sans-serif for body text and headings
 * - Variable font for optimal loading
 * - Used for all UI text
 * 
 * Newsreader: Serif font for emphasis/italics only
 * - Creates elegant contrast when text is italicized
 * - Only loads italic weight to minimize bundle size
 */
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
