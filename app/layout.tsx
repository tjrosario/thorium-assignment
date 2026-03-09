import type { Metadata } from "next";
import { Krona_One } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

/**
 * Krona One — display heading font ("CHOOSE YOUR", "ACCESS", buttons).
 */
const kronaOne = Krona_One({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-krona",
  weight: "400",
});

/**
 * Messina Sans — body and UI text.
 * Loaded locally from licensed .woff2 files.
 */
const messinaSans = localFont({
  display: "swap",
  src: [
    { path: "../public/fonts/MessinaSans-Regular.woff2", style: "normal", weight: "400" },
    { path: "../public/fonts/MessinaSans-RegularItalic.woff2", style: "italic", weight: "400" },
    { path: "../public/fonts/MessinaSans-Book.woff2", style: "normal", weight: "450" },
    { path: "../public/fonts/MessinaSans-SemiBold.woff2", style: "normal", weight: "600" },
    { path: "../public/fonts/MessinaSans-Bold.woff2", style: "normal", weight: "700" },
  ],
  variable: "--font-messina",
});

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.magnacare.com/access",
  },
  description:
    "Choose your access with MagnaCare. Expand your provider network anywhere in the country or lease just the locations you need. PPO coverage across all 50 states and Puerto Rico.",
  keywords: [
    "MagnaCare",
    "provider network",
    "PPO network",
    "healthcare access",
    "nationwide coverage",
    "health insurance",
  ],
  openGraph: {
    description:
      "Expand your provider network anywhere in the country. PPO coverage across all 50 states and Puerto Rico with top-rated doctors and hospitals.",
    locale: "en_US",
    siteName: "MagnaCare",
    title: "MagnaCare Access - Choose Your Nationwide Provider Network",
    type: "website",
    url: "https://www.magnacare.com/access",
  },
  robots: {
    follow: true,
    index: true,
  },
  title: "MagnaCare Access - Expand Your Provider Network Nationwide",
  twitter: {
    card: "summary_large_image",
    description:
      "Expand your provider network anywhere in the country. PPO coverage across all 50 states and Puerto Rico.",
    title: "MagnaCare Access - Choose Your Nationwide Provider Network",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${kronaOne.variable} ${messinaSans.variable} font-sans`} lang="en">
      <body className="min-h-screen overflow-x-hidden font-messina">{children}</body>
    </html>
  );
}
