import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
imimport { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "SpiritedRoots - Natural Living for Homeschool Moms",
  description: "Discover natural living tips, eco-friendly product reviews, and homeschool resources for moms who want to create joyful, healthy family lives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
