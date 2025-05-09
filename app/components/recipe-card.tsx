import Link from 'next/link';
import Image from 'next/image';
import { Clock, ChefHat } from 'lucide-react';
import { Badge } from './ui/badge';
import { formatTime, getDifficultyColor } from '@/lib/utils';
import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { id, title, time, difficulty, category, image, tags } = recipe;
  
  return (
    <Link href={`/recetas/${id}`}>
      <div className="group relative overflow-hidden rounded-xl h-full bg-white dark:bg-gray-900 transition-all duration-300">
        {/* Efecto de elevación */}
        <div className="absolute inset-0 group-hover:shadow-[0_20px_80px_-10px_rgba(0,0,0,0.3)] transition-all duration-500"></div>
        
        {/* Imagen con overlay y efecto de zoom */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
          
          {/* Categoría */}
          <div className="absolute top-3 left-3 z-10">
            <Badge 
              className="bg-white/90 text-black hover:bg-white dark:bg-black/80 dark:text-white dark:hover:bg-black/60 backdrop-blur-sm font-medium px-3 py-1"
            >
              {category}
            </Badge>
          </div>
          
          {/* Tiempo e info */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-10">
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
              <Clock className="mr-1 h-3.5 w-3.5" />
              <span>{formatTime(time)}</span>
            </div>
            
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
              <ChefHat className="mr-1 h-3.5 w-3.5" />
              <span>{difficulty}</span>
            </div>
          </div>
        </div>
        
        {/* Contenido */}
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors duration-300">{title}</h3>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tags?.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="bg-gray-100 dark:bg-gray-800 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Efecto hover */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </Link>
  );
}
