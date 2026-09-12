import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Kasis Shrestha — Cybersecurity & GRC Professional";
const description =
  "Kasis Shrestha is a cybersecurity and GRC professional specializing in information security, governance, risk, compliance and security auditing.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: "%s — Kasis Shrestha",
  },
  description,
  keywords: [
    "Kasis Shrestha",
    "Cybersecurity",
    "GRC",
    "Information Security",
    "ISO 27001",
    "Lead Auditor",
    "Security Audit",
    "Risk Assessment",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: "Kasis Shrestha",
    description: "Cybersecurity / GRC / Information Security",
    url: siteConfig.siteUrl,
    siteName: "Kasis Shrestha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasis Shrestha",
    description: "Cybersecurity / GRC / Information Security",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Applies a previously-chosen theme before first paint, so there's no flash
// of the wrong theme. Pure system-preference visitors (no stored choice)
// need no JS at all — the CSS in globals.css already follows
// prefers-color-scheme on its own.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <CustomCursor />
        <Navigation />
        <main id="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
