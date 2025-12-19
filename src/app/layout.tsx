import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

/**
 * Font configuration - zachjohnston style
 * 
 * Instrument Sans: Contemporary sans-serif for all text
 * - Clean, modern feel
 * - Single weight (400) for simplicity
 */
const instrumentSans = Instrument_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
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
    <html lang="en" className={instrumentSans.variable}>
      <body>{children}</body>
    </html>
  );
}
