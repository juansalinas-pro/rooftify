import { DollarSign, Eye, Scale, PieChart } from "lucide-react"

export function InvestmentAdvantages() {
  const advantages = [
    {
      icon: DollarSign,
      title: "Desde USD 100",
      description: "Accede a bienes raíces sin capital millonario.",
    },
    {
      icon: Eye,
      title: "Seguridad y transparencia",
      description: "Cada fracción representa una propiedad real.",
    },
    {
      icon: Scale,
      title: "Respaldo legal",
      description: "Cumplimos con la legislación paraguaya.",
    },
    {
      icon: PieChart,
      title: "Diversificación inteligente",
      description: "Minimiza riesgos invirtiendo en múltiples propiedades.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-blue-800">
          ¿Por qué invertir con Rooftify?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <advantage.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-blue-800">{advantage.title}</h3>
              <p className="text-gray-600 text-center">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

