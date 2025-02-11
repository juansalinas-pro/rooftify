"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"
import { Button } from "@/components/ui/button"
import { useContactForm } from "@/contexts/ContactFormContext"

export function Calculator() {
  const { openContactForm } = useContactForm()
  const [initialAmount, setInitialAmount] = useState("100")
  const [monthlyAmount, setMonthlyAmount] = useState("20")
  const [years, setYears] = useState("10")
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [focusedInput, setFocusedInput] = useState<"initial" | "monthly" | "years" | null>(null)

  useEffect(() => {
    if (focusedInput && inputRef.current) {
      inputRef.current.focus()
    }
  }, [focusedInput])

  const chartData = useMemo(() => {
    const initial = Number.parseFloat(initialAmount) || 100
    const monthly = Number.parseFloat(monthlyAmount) || 20
    const period = Number.parseInt(years) || 10
    const annualInterestRate = 0.085
    const monthlyInterestRate = annualInterestRate / 12

    const data = []
    let totalWithInterest = initial
    let totalWithoutInterest = initial

    for (let year = 0; year <= period; year++) {
      if (year > 0) {
        for (let month = 0; month < 12; month++) {
          totalWithInterest = (totalWithInterest + monthly) * (1 + monthlyInterestRate)
        }
      }
      totalWithoutInterest = initial + monthly * 12 * year

      data.push({
        year: `Año ${year}`,
        "Con interés compuesto": Math.round(totalWithInterest),
        "Total invertido": Math.round(totalWithoutInterest),
      })
    }
    return data
  }, [initialAmount, monthlyAmount, years])

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, field: "initial" | "monthly" | "years") => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value)
      setFocusedInput(field)
    }

  const formatCurrency = (value: number) => 
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)

  return (
    <Card className="w-full max-w-6xl mx-auto bg-white shadow-xl p-6 md:p-8">
      <CardContent className="p-0">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-light text-gray-600 mb-1 md:mb-2">SIMULA TU GANANCIA</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800">¿y cuánto gano?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-12">
          <Input ref={focusedInput === "initial" ? inputRef : null} type="number" placeholder="100" value={initialAmount} onChange={handleInputChange(setInitialAmount, "initial")} className="w-full" />
          <Input ref={focusedInput === "monthly" ? inputRef : null} type="number" placeholder="20" value={monthlyAmount} onChange={handleInputChange(setMonthlyAmount, "monthly")} className="w-full" />
          <Input ref={focusedInput === "years" ? inputRef : null} type="number" placeholder="10" value={years} onChange={handleInputChange(setYears, "years")} className="w-full" />
        </div>
        <div className="h-[300px] md:h-[400px] w-full mb-6 md:mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={formatCurrency} domain={[0, "dataMax"]} />
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Area type="monotone" dataKey="Con interés compuesto" stroke="#0891b2" fillOpacity={0.6} />
              <Area type="monotone" dataKey="Total invertido" stroke="#64748b" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-gray-500 text-center mb-6 md:mb-8">
          *Los resultados son simulados a partir de una tasa de interés del 8.5% estimada.
        </p>
        <div className="flex justify-center">
          <Button
            onClick={openContactForm}
            className="bg-orange-500 hover:bg-orange-600 text-white transition-colors text-lg px-6 md:px-8 py-4 md:py-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Asegurar mi acceso anticipado
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
