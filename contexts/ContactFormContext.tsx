"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ContactFormContextType {
  isContactFormOpen: boolean
  openContactForm: () => void
  closeContactForm: () => void
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined)

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const openContactForm = () => setIsContactFormOpen(true)
  const closeContactForm = () => setIsContactFormOpen(false)

  return (
    <ContactFormContext.Provider value={{ isContactFormOpen, openContactForm, closeContactForm }}>
      {children}
    </ContactFormContext.Provider>
  )
}

export function useContactForm() {
  const context = useContext(ContactFormContext)
  if (context === undefined) {
    throw new Error("useContactForm must be used within a ContactFormProvider")
  }
  return context
}

