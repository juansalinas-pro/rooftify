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
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-blue-800">¿Qué hacemos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative pt-12 pb-6 px-6 text-center"
            >
              <div className="absolute top-3 left-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}