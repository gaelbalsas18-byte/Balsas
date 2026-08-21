import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatAssistant from "@/components/Chatbot/ChatAssistant";
import { Children } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balsas Dental",
  description: "Balsas Dental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} {manrope.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        
        <main className="pt-20">
        {children}
        </main>
        </body>
    </html>
  );
}
