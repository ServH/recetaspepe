import Link from 'next/link';
import { Github, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between">
          <div>
            <Link href="/" className="flex items-center mb-4 md:mb-0">
              <span className="text-xl font-bold">Recetas de Pepe</span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mb-4 md:mb-0">
            <Link href="/" className="text-sm hover:underline">
              Inicio
            </Link>
            <Link href="/recetas" className="text-sm hover:underline">
              Recetas
            </Link>
            <Link href="/categorias" className="text-sm hover:underline">
              Categorías
            </Link>
            <Link href="/nosotros" className="text-sm hover:underline">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-sm hover:underline">
              Contacto
            </Link>
          </div>
          <div className="flex mt-4 space-x-4 md:mt-0">
            <Link href="https://github.com/ServH/recetaspepe" aria-label="GitHub" className="p-1 rounded-full hover:bg-muted">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="p-1 rounded-full hover:bg-muted">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Linkedin" className="p-1 rounded-full hover:bg-muted">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Facebook" className="p-1 rounded-full hover:bg-muted">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Recetas de Pepe. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
