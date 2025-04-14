import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { BackToTop } from "@/components/back-to-top";
import { FloatingContactButton } from "@/components/floating-contact-button";
import { CursorSpotlight } from "@/components/cursor-spotlight";

const inter = Inter({ subsets: ["latin"] });

// ✅ Metadata (cleaned up)
export const metadata: Metadata = {
  title: "MauryaCode - Innovative Digital Solutions",
  description:
    "We create innovative digital solutions that help businesses thrive in the modern world.",
  keywords: [
    "web design",
    "web development",
    "digital agency",
    "MauryaCode",
    "e-commerce",
    "SEO",
    "website maintenance",
  ],
  authors: [{ name: "MauryaCode" }],
  creator: "MauryaCode",
  publisher: "MauryaCode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.dev",
};

// ✅ Moved to `viewport` export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1e1e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <BackToTop />
            <FloatingContactButton />
            <CursorSpotlight />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
