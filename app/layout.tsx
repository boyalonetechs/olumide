import type { Metadata } from "next";
import { Inter, Syne, Geist_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
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

/**
 * Sets the theme before hydration to prevent a flash of the wrong mode.
 * Default = dark (neo-brutalist); stored "light" switches to warm editorial.
 */
const themeInit = /* @__PURE__ */ `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark");}else{document.documentElement.classList.add("dark");}}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${syne.variable} ${inter.variable} ${mono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}