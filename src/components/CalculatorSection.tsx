import { Calculator } from "./Calculator"

export function CalculatorSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-blue-800">
          Calcula tu Inversión
        </h2>
        <Calculator />
      </div>
    </section>
  )
}

