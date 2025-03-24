import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/app-sidebar";
import {  SidebarInset, SidebarProvider } from "@/components/ui/sidebar"; 
import { Toggler } from "@/components/toggler";   

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s / CHAI',
    default: 'CHAI',
  },
  description: 'CHAI - AI conversation platform',
  openGraph: {
    images: [
      {
        url: 'https://chai.iamoc.me/banner.png',
        width: 1200,
        height: 630,
        alt: 'CHAI - AI conversation platform',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHAI',
    description: 'CHAI - AI conversation platform',
    images: ['https://chai.iamoc.me/banner.png'],
  },
};

export default function RootLayout({
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
          <SidebarProvider className="bg-white dark:bg-[#000101]">
          <AppSidebar />
          <SidebarInset className="bg-white dark:bg-black transition-colors duration-300">
            <Toggler />
            {children}
          </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

