import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export function FAQ() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">¿Tienes dudas?</h2>
        <p className="text-center text-gray-600 mb-12">
          Escríbenos al{" "}
          <Link href="https://chat.rooftify.com" className="text-blue-600 hover:underline">
            chat
          </Link>{" "}
          y te ayudamos a resolverlas.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              question: "¿Qué es la Tokenización Inmobiliaria?",
              answer:
                "La tokenización inmobiliaria transforma propiedades en activos digitales (tokens), democratizando la inversión en bienes raíces. Esto permite acceder a inversiones inmobiliarias desde montos pequeños, ser copropietario digital y obtener beneficios sin comprar un inmueble completo, además de recibir ingresos pasivos por alquileres y plusvalía.",
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
              answer: "Los pagos se realizan directamente a tu cuenta bancaria de forma automática.",
            },
            {
              question: "¿Qué es un token?",
              answer: "Un token representa una fracción digital de una propiedad y sus beneficios económicos.",
            },
            {
              question: "¿Puedo vender mis tokens antes?",
              answer: "Sí, puedes vender tus tokens en cualquier momento a través de nuestra plataforma.",
            },
            {
              question: "¿Cómo gano con mis tokens?",
              answer: "Ganas a través de los ingresos por arriendo y la plusvalía de la propiedad.",
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

