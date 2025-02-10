import { Button } from "@/components/ui/button"
import { useContactForm } from "@/contexts/ContactFormContext"

export function StartToday() {
  const { openContactForm } = useContactForm()

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">¡No te quedes afuera!</h2>
        <p className="text-xl mb-8 text-gray-700">
          No dejes pasar la oportunidad de formar parte del futuro de las inversiones inmobiliarias.
        </p>
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white transition-colors text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          onClick={openContactForm}
        >
          Asegurar mi acceso anticipado
        </Button>
      </div>
    </section>
  )
}

