import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import RootLayoutClient from './layout.client';
import '@/styles.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ayksolutions.com'),
  title: 'AYK Solutions — Premium Software Development',
  description:
    'We build websites, web apps, automations and custom software that help businesses grow faster.',
  openGraph: {
    title: 'AYK Solutions — Premium Software Development',
    description:
      'Custom websites, web apps, automations and software that move your business forward.',
    type: 'website',
    url: 'https://ayksolutions.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
  keywords: [
    'custom software development',
    'web applications',
    'website design',
    'e-commerce',
    'SaaS development',
  ],
  authors: [{ name: 'AYK Solutions' }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
