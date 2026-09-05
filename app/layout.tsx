import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olumide Faleye — Data Analyst & BI Consultant",
  description:
    "Portfolio of Olumide Faleye — Data Analyst, Business Intelligence Consultant & Data Analytics Trainer helping businesses turn raw data into confident, profitable decisions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${mono.variable} antialiased`}
    >
      <body className="bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}