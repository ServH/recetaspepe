import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-3xl">
        <div className="relative h-[500px] w-full overflow-hidden rounded-3xl">
          {/* Patrón decorativo */}
          <div className="absolute inset-0 bg-pattern-food opacity-10"></div>
          
          {/* Círculos decorativos */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          
          {/* Contenido */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
            <span className="px-4 py-1.5 bg-white/20 text-white rounded-full backdrop-blur-sm text-sm font-medium mb-6">
              Las mejores recetas caseras
            </span>
            
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl mb-4 drop-shadow-sm">
              {title}
            </h1>
            
            <p className="mt-4 max-w-2xl text-xl text-white md:text-2xl font-light">
              {subtitle}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-white/90 hover:text-orange-700 text-lg px-8 py-6 rounded-xl"
              >
                <Link href="/recetas" className="flex items-center gap-2">
                  Explorar recetas
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                asChild 
                size="lg" 
                className="bg-transparent backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white text-lg px-8 py-6 rounded-xl"
              >
                <Link href="/categorias">
                  Ver categorías
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Elementos decorativos */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-12 bg-background rounded-t-xl"></div>
        </div>
      </div>
    </section>
  );
}
