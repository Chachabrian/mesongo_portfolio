import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Chacha Isaac – Senior Frontend Engineer",
  description:
    "Portfolio of Chacha Isaac, Senior Frontend Engineer building scalable, high-performance web and mobile products with React, Next.js, Node.js, Go, and React Native.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-[radial-gradient(circle_at_top,_#020617,_#020617_40%,_#000000)] text-zinc-100`}
      >
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.15),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(94,234,212,0.12),transparent_55%)] mix-blend-screen opacity-80" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
