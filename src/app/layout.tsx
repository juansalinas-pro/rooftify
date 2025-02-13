import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ContactFormProvider } from "@/contexts/ContactFormContext";
import "./globals.css";
import type React from "react";
import Script from "next/script";
import AnalyticsTracker from "@/components/AnalyticsTracker"; // Rastrear cambios de ruta

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rooftify",
  description: "Rooftify - Inversiones Inmobiliarias",
  icons: {
    icon: "/favicon.ico", // Path to your favicon in the public directory
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C5ELGD4Y2Y"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-C5ELGD4Y2Y', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <AnalyticsTracker /> {/* Rastrear cambios de ruta */}
        <ContactFormProvider>{children}</ContactFormProvider>
      </body>
    </html>
  );
}