import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
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
  title: "Subscribe to CHAI Pro",
  description: "Subscribe to CHAI Pro",
  openGraph: {
    images: [
      {
        url: 'https://chai.iamoc.me/banner.png',
        width: 1200,
        height: 630,
        alt: 'Subscribe to CHAI Pro',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subscribe to CHAI Pro',
    description: 'Subscribe to CHAI Pro',
    images: ['https://chai.iamoc.me/banner.png'],
  },
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
            <main>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}