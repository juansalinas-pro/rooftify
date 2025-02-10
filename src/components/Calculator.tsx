"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

export function Calculator() {
  const [step, setStep] = useState<"input" | "result">("input")
  const [initialAmount, setInitialAmount] = useState("100000")
  const [monthlyAmount, setMonthlyAmount] = useState("100000")
  const [years, setYears] = useState("10")
  const [chartData, setChartData] = useState<any[]>([])
  const [isMobile, setIsMobile] = useState(false)

  // Calculate initial chart data on component mount
  useEffect(() => {
    calculateInvestment()
  }, []) // Run once on mount

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const calculateInvestment = () => {
    const initial = Number.parseFloat(initialAmount)
    const monthly = Number.parseFloat(monthlyAmount)
    const period = Number.parseInt(years)
    const interestRate = 0.12 // 12% annual interest rate

    const data = []
    let totalWithInterest = initial
    let totalWithoutInterest = initial

    for (let year = 0; year <= period; year++) {
      const yearlyContribution = monthly * 12
      totalWithoutInterest = initial + yearlyContribution * year
      totalWithInterest = (totalWithInterest + yearlyContribution) * (1 + interestRate)

      data.push({
        year: `Año ${year}`,
        withInterest: Math.round(totalWithInterest),
        withoutInterest: Math.round(totalWithoutInterest),
      })
    }

    setChartData(data)
    if (isMobile) {
      setStep("result")
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const DesktopCalculator = () => (
    <Card className="w-full max-w-6xl mx-auto bg-white shadow-xl p-8">
      <CardContent className="p-0">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light text-gray-600 mb-2">SIMULA TU GANANCIA</h2>
          <h3 className="text-3xl font-bold text-blue-800">¿y cuánto gano?</h3>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Puedo partir con:</label>
            <Input
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(e.target.value)}
              className="border-blue-600 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">y mensualmente voy a invertir:</label>
            <Input
              type="number"
              value={monthlyAmount}
              onChange={(e) => setMonthlyAmount(e.target.value)}
              className="border-blue-600 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              La constancia es la clave. Voy a invertir por:
            </label>
            <Input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="border-blue-600 focus:ring-blue-600"
            />
          </div>
        </div>

        <div className="h-[400px] w-full mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 40, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                domain={[0, "dataMax"]}
                allowDataOverflow={true}
              />
              <Tooltip formatter={(value: number) => formatCurrency(value)} labelStyle={{ color: "#1e40af" }} />
              <Area type="monotone" dataKey="withInterest" stroke="#0891b2" fill="#0891b2" fillOpacity={0.6} />
              <Area type="monotone" dataKey="withoutInterest" stroke="#64748b" fill="#64748b" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <p className="text-xs text-gray-500 text-center mb-8">
          *Los resultados son simulados a partir de una tasa de interés del 12% estimada.
        </p>

        <div className="flex justify-center">
          <Button
            onClick={calculateInvestment}
            className="bg-blue-800 hover:bg-blue-900 text-white py-6 px-8 rounded-full text-lg"
          >
            Simula tu inversión
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const MobileCalculator = () => (
    <Card className="w-full max-w-lg mx-auto bg-white shadow-xl">
      <CardContent className="p-6">
        <h2 className="text-2xl font-light text-center mb-2 text-gray-600">SIMULA TU GANANCIA</h2>
        {step === "input" ? (
          <>
            <h3 className="text-3xl font-bold text-center mb-8 text-blue-800">¿y cuánto gano?</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Puedo partir con:</label>
                <Input
                  type="number"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(e.target.value)}
                  className="border-blue-600 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">y mensualmente voy a invertir:</label>
                <Input
                  type="number"
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(e.target.value)}
                  className="border-blue-600 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  La constancia es la clave. Voy a invertir por:
                </label>
                <Input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="border-blue-600 focus:ring-blue-600"
                />
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">
                *Los resultados son simulados a partir de una tasa de interés del 12% estimada.
              </p>
              <Button
                onClick={calculateInvestment}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-full"
              >
                Simula tu futuro
              </Button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-light text-center mb-2 text-gray-600">Los resultados simulados son:</h3>
            <div className="h-[50vh] min-h-[300px] w-full mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis
                    tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                    domain={[0, "dataMax"]}
                    allowDataOverflow={true}
                  />
                  <Tooltip formatter={(value: number) => formatCurrency(value)} labelStyle={{ color: "#1e40af" }} />
                  <Area type="monotone" dataKey="withInterest" stroke="#0891b2" fill="#0891b2" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="withoutInterest" stroke="#64748b" fill="#64748b" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-500 text-center mt-4">
              *Los resultados son simulados a partir de una tasa de interés del 12% estimada.
            </p>
            <div className="flex gap-4 mt-6">
              <Button
                onClick={() => setStep("input")}
                variant="outline"
                className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Volver
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">Invertir</Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )

  return isMobile ? <MobileCalculator /> : <DesktopCalculator />
}

