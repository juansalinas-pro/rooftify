"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useContactForm } from "@/contexts/ContactFormContext"

export function Hero() {
  const { openContactForm } = useContactForm()

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="mb-6 leading-tight">
            <span className="text-sm md:text-base text-blue-600 mb-2 block font-semibold">Próximamente</span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 block mb-2">
              Genera <span className="text-orange-500">ingresos mensuales</span> invirtiendo en proyectos inmobiliarios
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 block">
              Fácil, Accesible y 100% Digital
            </span>
          </h1>
          <p className="text-xl mb-8 max-w-lg text-gray-600">
            Te ofrecemos una nueva forma de invertir en proyectos inmobiliarios de alta calidad, de manera transparente
            y segura desde USD 100.
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white transition-colors text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={openContactForm}
          >
            Asegurar mi acceso anticipado
          </Button>
          <p className="text-sm mt-4 text-gray-500 max-w-lg">
            Regístrate hoy y sé el primero en conocer nuestro lanzamiento.
          </p>
        </div>
        <div className="md:w-1/2 relative flex justify-center items-center">
          <div className="relative z-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-01%20at%2017.43.42-Photoroom-u2lf46NE3Hc3ay0VXhQddeQQ54dR4e.png"
              alt="App Interface Dashboard mostrando inversiones y balance"
              width={400}
              height={800}
              className="w-full max-w-sm mx-auto"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

