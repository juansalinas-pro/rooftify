import { Search, Coins, Home } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: "Explora proyectos verificados",
      description: "Elige entre propiedades con alto potencial de rentabilidad.",
    },
    {
      step: 2,
      icon: Coins,
      title: "Invierte con total flexibilidad",
      description: "Compra tokens respaldados por bienes raíces desde solo USD 100.",
    },
    {
      step: 3,
      icon: Home,
      title: "Gana ingresos pasivos",
      description: "Recibe rendimientos mensuales por alquileres o plusvalías.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-blue-800">¿Cómo funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
              <div className="absolute top-4 left-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                {step.step}
              </div>
              <div className="flex justify-center mb-6 mt-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-blue-800">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}