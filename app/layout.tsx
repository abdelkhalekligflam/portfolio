import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://portfolio-one-self-87.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdelkhalek Ligflam | Front-End Developer",
    template: "%s | Abdelkhalek Ligflam",
  },
  description:
    "Portfolio of Abdelkhalek Ligflam, a Front-End Developer building modern, responsive web applications with React, Next.js and TypeScript.",
  keywords: ["Abdelkhalek Ligflam", "Front-End Developer", "React", "Next.js", "TypeScript", "Morocco"],
  authors: [{ name: "Abdelkhalek Ligflam" }],
  creator: "Abdelkhalek Ligflam",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Abdelkhalek Ligflam | Front-End Developer",
    description: "Modern front-end projects built with React, Next.js, TypeScript and modern web technologies.",
    siteName: "Abdelkhalek Ligflam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelkhalek Ligflam | Front-End Developer",
    description: "Front-End Developer building modern, responsive web applications.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
