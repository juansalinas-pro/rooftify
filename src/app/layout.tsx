import { Inter } from "next/font/google";
import { ContactFormProvider } from "@/contexts/ContactFormContext";
import "./globals.css";
import type React from "react";
import Script from "next/script";
import AnalyticsTracker from "@/components/AnalyticsTracker"; // Importa el componente de seguimiento

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-0TPFNCP0H5`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0TPFNCP0H5', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <AnalyticsTracker /> {/* Componente que rastrea cambios de ruta */}
        <ContactFormProvider>{children}</ContactFormProvider>
      </body>
    </html>
  );
}