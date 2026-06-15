import '@fontsource-variable/inter';
import type { Metadata, Viewport } from 'next';
import './globals.css';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Sole Shifu | Premium Shoe Care & Sneaker Restoration',
    template: `%s | ${siteConfig.name}`
  },
  description:
    'Premium sneaker cleaning, restoration, whitening, suede care and protection services. Pickup and delivery available. Book instantly on WhatsApp.',
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: 'Premium shoe care and restoration'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sole Shifu | Premium Shoe Care & Sneaker Restoration',
    description:
      'Premium sneaker cleaning, restoration, whitening, suede care and protection services. Pickup and delivery available. Book instantly on WhatsApp.'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050507'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
