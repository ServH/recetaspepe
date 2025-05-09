import { Button } from './ui/button';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden rounded-xl">
      <div className="relative bg-gradient-to-r from-orange-600 to-amber-600 h-[450px] w-full">
        <div className="absolute inset-0 opacity-20 bg-pattern-food"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/recetas">Ver todas las recetas</Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white">
              <Link href="/categorias">Explorar categorías</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
