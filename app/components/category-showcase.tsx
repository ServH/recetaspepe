import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '@/lib/data';

export default function CategoryShowcase() {
  const categories = getCategories();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/categorias/${category.slug}`}
          className="group relative overflow-hidden rounded-lg"
        >
          <div className="relative h-40 w-full">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-lg font-semibold text-white text-center tracking-tight px-4 transition-transform group-hover:scale-110">
                {category.name}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
