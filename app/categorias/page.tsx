import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '@/lib/data';

export const metadata = {
  title: 'Categorías de Recetas - Recetas de Pepe',
  description: 'Explora nuestras recetas organizadas por categorías para encontrar fácilmente lo que buscas.',
};

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Categorías</h1>
      <p className="text-lg text-muted-foreground mb-10">
        Encuentra recetas fácilmente navegando por nuestras categorías culinarias.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            href={`/categorias/${category.slug}`}
            className="group relative overflow-hidden rounded-xl h-60 flex items-center justify-center"
          >
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
            </div>
            <div className="relative z-10 text-center p-6">
              <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
              <p className="text-white/80 text-sm mb-4">{category.description}</p>
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                {category.count} {category.count === 1 ? 'receta' : 'recetas'}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
