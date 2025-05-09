import Link from 'next/link';
import Image from 'next/image';
import { Clock, ChefHat } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter } from './ui/card';
import { formatTime, getDifficultyColor, getCategoryColor } from '@/lib/utils';
import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { id, title, time, difficulty, category, image } = recipe;
  
  return (
    <Link href={`/recetas/${id}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 recipe-card-shadow hover:border-primary">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-3 left-3 z-10">
            <Badge 
              className={getCategoryColor(category)}
              variant="secondary"
            >
              {category}
            </Badge>
          </div>
        </div>
        <CardContent className="pt-4">
          <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
          <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{formatTime(time)}</span>
            </div>
            <div className="flex items-center">
              <ChefHat className="mr-1 h-4 w-4" />
              <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(difficulty)}`}>
                {difficulty}
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0 pb-4">
          <div className="flex flex-wrap gap-2">
            {recipe.tags?.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
