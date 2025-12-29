import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LayoutWrapper from "./components/LayoutWrapper";

// Primary Font - Work Sans (similar to FIVO Sans)
const workSans = Work_Sans({
  variable: "--font-fivo-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Secondary Font - Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gambling app blog",
  description: "Generated for promoting gambling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <LayoutWrapper footer={<Footer />}>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
