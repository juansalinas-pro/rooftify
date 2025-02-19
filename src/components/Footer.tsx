import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Qué hacemos</h3>
            <p className="text-gray-400">
              Democratizamos la inversión inmobiliaria, permitiendo invertir en fracciones de propiedades desde USD 100
              desde cualquier parte del mundo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Fragmenta tu propiedad
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre nosotros</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Nuestro equipo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Trabaja con nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2025 Rooftify. Todos los derechos reservados. Asunción, Paraguay.
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/rooftify.py/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="https://www.linkedin.com/company/rooftify/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}