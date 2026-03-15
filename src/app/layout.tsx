import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const lora = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.violetmama.com'),
  title: {
    default: 'Violet Mama - Natural Living & Mindful Motherhood',
    template: '%s | Violet Mama',
  },
  description: "Join Violet for natural living tips, eco-friendly product reviews, and mindful motherhood resources for creating joyful, healthy family lives.",
  alternates: {
    types: {
      'application/rss+xml': 'https://www.violetmama.com/feed.xml',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Violet Mama',
    locale: 'en_US',
    url: 'https://www.violetmama.com',
    title: 'Violet Mama - Natural Living & Mindful Motherhood',
    description: 'Natural living tips, eco-friendly product reviews, and mindful motherhood resources for creating joyful, healthy family lives.',
    images: [{ url: '/images/heroes/homepage-hero.jpg', width: 1200, height: 630, alt: 'Violet Mama' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Violet Mama - Natural Living & Mindful Motherhood',
    description: 'Natural living tips, eco-friendly product reviews, and mindful motherhood resources.',
    images: ['/images/heroes/homepage-hero.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${nunitoSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Violet Mama',
            url: 'https://www.violetmama.com',
            description: 'Natural living tips, eco-friendly product reviews, and mindful motherhood resources.',
            sameAs: [],
          }) }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
