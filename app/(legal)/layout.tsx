import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chai - Legal",
  description: "Legal information for Chai AI Social Media Platform",
};

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system">
          <div className="min-h-screen bg-white dark:bg-black">
            <header className="border-b border-gray-100 dark:border-neutral-700">
              <div className="max-w-screen-xl mx-auto px-6 py-5">
                <Link href="/" className="inline-block">
                  <Image
                    src="https://www.chai-research.com/images/chai-logo.png"
                    alt="Chai Research"
                    width={120}
                    height={40}
                    className="h-8 w-auto invert dark:invert-0"
                  />
                </Link>
              </div>
            </header>
            <main>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}