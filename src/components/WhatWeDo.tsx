import { MapPin, Coins, Home, Receipt, TrendingUp } from "lucide-react"

export function WhatWeDo() {
  const steps = [
    {
      icon: MapPin,
      title: "Buscamos oportunidades exclusivas",
      description: "Adquirimos propiedades con alto potencial de revalorización.",
    },
    {
      icon: Coins,
      title: "Tokenizamos la inversión",
      description: "Cada propiedad se divide en tokens para que puedas invertir sin barreras de entrada.",
    },
    {
      icon: Home,
      title: "Reformamos y optimizamos",
      description: "Mejoramos cada inmueble para maximizar su valor y rentabilidad.",
    },
    {
      icon: Receipt,
      title: "Alquilamos y generamos ingresos",
      description: "Los rendimientos se distribuyen entre los inversores de forma transparente.",
    },
    {
      icon: TrendingUp,
      title: "Vendemos y multiplicamos tu inversión",
      description: "Buscamos el mejor momento para vender y maximizar tu retorno.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-blue-800">¿Qué hacemos?</h2>
        <div className="space-y-20 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
              <div className="md:w-1/2 flex justify-center relative">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                  <step.icon className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

