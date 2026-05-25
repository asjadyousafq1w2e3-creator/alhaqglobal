import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import RootLayoutClient from "./layout.client";
import "../styles.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display-next",
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-next",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayksolutions.com"),
  title: "AYK Solutions — Premium Software Development",
  description:
    "We build websites, web apps, automations and custom software that help businesses grow faster.",
  openGraph: {
    title: "AYK Solutions — Premium Software Development",
    description:
      "Custom websites, web apps, automations and software that move your business forward.",
    type: "website",
    url: "https://ayksolutions.com",
  },
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "custom software development",
    "web applications",
    "website design",
    "e-commerce",
    "SaaS development",
  ],
  authors: [{ name: "AYK Solutions" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${manrope.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
