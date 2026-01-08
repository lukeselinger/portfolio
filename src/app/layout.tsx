import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

/**
 * Font configuration - daneden.me clone
 * 
 * Source Serif 4: Premium serif for body text
 * - Modern, readable, elegant
 * - Similar character to Tiempos (which is not freely available)
 * - Used for body text to create editorial feel
 * 
 * System fonts: For headings and UI
 * - Native feel, fast loading
 * - Handled via CSS variables (font-heading)
 */
const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Eden — Product Designer",
  description: "Product Designer at Meta Reality Labs. Building apps for time, weather, and introspection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSerif.variable}>
      <body>{children}</body>
    </html>
  );
}
