import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

/**
 * Font configuration - adampolselli style
 * 
 * Newsreader: Primary serif font for all text
 * - Creates editorial, condensed feel similar to LibreCaslonCondensed
 * - Loads regular + italic weights
 */
const newsreader = Newsreader({
  variable: "--font-primary",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luke Selinger, Product Designer",
  description: "Product Designer with a penchant for product strategy, prototyping, and alliteration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={newsreader.variable}>
      <body>{children}</body>
    </html>
  );
}
