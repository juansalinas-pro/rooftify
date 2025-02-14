"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { event } from "@/lib/analytics"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    event({
      action: "submit_contact_form",
      category: "Contact",
      label: "Submit Contact Form",
      value: formData,
    })

    try {
      const response = await axios.post('/api/contacts', formData);
      if (response.data.status === StatusCodes.CREATED) {
        setMessage({ type: "success", text: "¡Gracias por registrarte!. Pronto recibirás novedades exclusivas. " })
        setTimeout(() => {
          onClose()
          setMessage(null)
        }, 3000)
      } else {
        setMessage({ type: "error", text: "Lo sentimos, ha ocurrido un error. Por favor, inténtalo de nuevo más tarde." })
      }
    } catch (error) {
      console.error('Error saving data:', error);
      setMessage({ type: "error", text: "Lo sentimos, ha ocurrido un error. Por favor, inténtalo de nuevo más tarde." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-blue-50 to-white p-0 overflow-hidden">
        <DialogTitle className="sr-only">Formulario de contacto</DialogTitle>
        <div className="p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-800">Formulario de contacto</h2>
            <p className="mt-2 text-gray-600 text-sm"></p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Nombre y Apellido
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Ingresá tu nombre y apellido"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Teléfono
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Ingresá tu teléfono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Ingresá tu correo electrónico"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
              />
            </div>

            {message && (
              <div
                className={`p-3 rounded-md ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                {message.text}
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 transition duration-150 ease-in-out"
              >
                Tal vez luego
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white transition duration-150 ease-in-out"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}