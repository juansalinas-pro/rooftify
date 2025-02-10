export function ParaguayAdvantages() {
  const rentabilityData = [
    { country: "Paraguay", value: 8.5 },
    { country: "Brasil", value: 6.2 },
    { country: "Argentina", value: 5.8 },
    { country: "Uruguay", value: 7.1 },
  ]

  // Sort rentabilityData array from highest to lowest percentage
  const sortedRentabilityData = rentabilityData.sort((a, b) => b.value - a.value)

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-100 to-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-blue-800">
          ¿Por qué Paraguay?
        </h2>
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <div className="mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Crecimiento inmobiliario acelerado</strong> – Un mercado en expansión con oportunidades
                    únicas.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Alta rentabilidad</strong> – Mejores retornos comparados con otros países de la región.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Estabilidad económica</strong> – Un entorno seguro para invertir a largo plazo.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Costos competitivos</strong> – Inmuebles más accesibles con mayor margen de ganancia.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Comparativa de Rentabilidad Anual</h3>
              <div className="space-y-4">
                {sortedRentabilityData.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-24 font-semibold text-gray-700">{item.country}</span>
                    <div className="flex-grow bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div
                        className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(item.value / 10) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-4 font-semibold text-blue-800">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

