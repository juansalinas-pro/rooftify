import { Inter } from "next/font/google"
import { ContactFormProvider } from "@/contexts/ContactFormContext"
import "./globals.css"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ContactFormProvider>{children}</ContactFormProvider>
      </body>
    </html>
  )
}