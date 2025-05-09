import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ChefHat, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getRecipe, getRecipesByTag } from '@/lib/data';
import { formatTime, getDifficultyColor, getCategoryColor } from '@/lib/utils';
import RecipeCard from '@/components/recipe-card';

interface RecipeDetailPageProps {
  params: {
    id: string;
  };
}

export function generateMetadata({ params }: RecipeDetailPageProps) {
  const recipe = getRecipe(params.id);
  
  if (!recipe) {
    return {
      title: 'Receta no encontrada',
      description: 'Lo sentimos, la receta que buscas no se ha encontrado.',
    };
  }

  return {
    title: `${recipe.title} - Recetas de Pepe`,
    description: recipe.description,
  };
}

export default function RecipeDetailPage({ params }: RecipeDetailPageProps) {
  const recipe = getRecipe(params.id);

  if (!recipe) {
    notFound();
  }

  // Obtener recetas relacionadas por etiquetas
  const relatedRecipes = getRecipesByTag(recipe.tags[0] || '')
    .filter(r => r.id !== recipe.id)
    .slice(0, 3);

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">{recipe.title}</h1>

          <div className="flex flex-wrap gap-3 mb-6">
            <Badge
              className={getCategoryColor(recipe.category)}
              variant="secondary"
            >
              {recipe.category}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {formatTime(recipe.time)}
            </Badge>
            <Badge 
              variant="outline" 
              className={`flex items-center gap-1 ${getDifficultyColor(recipe.difficulty)}`}
            >
              <ChefHat className="h-3 w-3" />
              {recipe.difficulty}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {recipe.servings} raciones
            </Badge>
          </div>

          <p className="text-lg text-muted-foreground">{recipe.description}</p>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl mb-8">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="grid gap-10 md:grid-cols-3 mb-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold mb-4">Ingredientes</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Preparación</h2>
            <ol className="space-y-6">
              {recipe.steps.map((step) => (
                <li key={step.id} className="flex">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4 font-semibold">
                    {step.id}
                  </span>
                  <div className="pt-1">
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="pt-6 border-t">
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-muted-foreground">Etiquetas:</span>
            {recipe.tags.map((tag) => (
              <Link key={tag} href={`/buscar?tag=${tag}`}>
                <Badge variant="outline" className="hover:bg-secondary transition-colors">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        {relatedRecipes.length > 0 && (
          <div className="pt-12 border-t">
            <h2 className="text-2xl font-semibold mb-6">Recetas relacionadas</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {relatedRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
