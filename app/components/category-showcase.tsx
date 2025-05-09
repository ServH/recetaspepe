import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CategoryShowcase() {
  const categories = getCategories();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((category, index) => (
        <Link
          key={category.slug}
          href={`/categorias/${category.slug}`}
          className="group relative overflow-hidden rounded-2xl"
        >
          <div className="relative h-44 md:h-60 w-full">
            {/* Imagen con overlay */}
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 group-hover:from-black/30 group-hover:to-black/80 transition-all duration-500"></div>
            
            {/* Contenido */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
              <h3 className="text-xl font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300">
                {category.name}
              </h3>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/80 line-clamp-1 mb-1">
                  {category.count} {category.count === 1 ? 'receta' : 'recetas'}
                </p>
                <span className="opacity-0 transform translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
              
              {/* Barra de progreso */}
              <div className="w-full h-1 mt-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transform origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
