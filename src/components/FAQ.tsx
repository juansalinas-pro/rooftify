import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export function FAQ() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">¿Tienes dudas?</h2>
        <p className="text-center text-gray-600 mb-12">
          Escríbenos al{" "}
          <Link href="https://api.whatsapp.com/send/?phone=595981657505&text=Hola%2C+tengo+algunas+dudas+sobre+Rooftify+y+me+gustar%C3%ADa+recibir+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            chat
          </Link>{" "}
          y te ayudamos a resolverlas.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              question: "¿Qué es la Fragmentación Inmobiliaria?",
              answer:
                "La fragmentación inmobiliaria transforma propiedades en activos digitales (fracciones inmobiliarias), democratizando la inversión en bienes raíces. Esto permite acceder a inversiones inmobiliarias desde montos pequeños, ser copropietario digital y obtener beneficios sin comprar un inmueble completo, además de recibir ingresos pasivos por alquileres y plusvalía.",
            },
            {
              question: "¿Quién administra la propiedad?",
              answer: "Nuestro equipo de expertos se encarga de la administración completa de la propiedad.",
            },
            {
              question: "¿Cómo se asegura la inversión?",
              answer: "Tu inversión está respaldada por activos inmobiliarios reales y contratos legales.",
            },
            {
              question: "¿Cómo recibo mis pagos?",
              answer: "Los pagos se realizan a tu cuenta bancaria.",
            },
            {
              question: "¿Qué es una fracción inmobiliaria?",
              answer: "Una fracción inmobiliaria representa una fracción digital de una propiedad y sus beneficios económicos.",
            },
            {
              question: "¿Puedo vender mis fracciones inmobiliarias antes?",
              answer: "Sí, puedes vender tus fracciones inmobiliarias en cualquier momento a través de nuestra plataforma.",
            },
            {
              question: "¿Cómo gano con mis fracciones inmobiliarias?",
              answer: "Ganas a través de los ingresos por alquiler y la plusvalía de la propiedad.",
            },
          ].map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="bg-white border rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}