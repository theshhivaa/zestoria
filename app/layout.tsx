import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

import { CustomCursor } from "@/components/CustomCursor";
import { IntroAnimation } from "@/components/IntroAnimation";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ZESTORIA | Zestoria twenty six",
  description: "Zestoria twenty six. Technical Fest of Sri Gogalam Arts & Science College happening on 6th February 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} antialiased bg-cyber-black text-foreground selection:bg-neon-green selection:text-black`}
      >
        <IntroAnimation />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
