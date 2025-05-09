import { Suspense } from 'react';
import { getRecipes } from '@/lib/data';
import RecipeCard from '@/components/recipe-card';
import { RecipeCardSkeleton } from '@/components/ui/skeletons';

export const metadata = {
  title: 'Todas las recetas - Recetas de Pepe',
  description: 'Explora nuestra colección completa de recetas caseras, deliciosas y fáciles de preparar.',
};

export default function RecipesPage() {
  const recipes = getRecipes();

  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Todas las recetas</h1>
      <p className="text-lg text-muted-foreground mb-10">
        Explora nuestra colección de recetas caseras, desde platos tradicionales hasta creaciones innovadoras.
      </p>

      <Suspense fallback={<RecipesGridSkeleton />}>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

function RecipesGridSkeleton() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <RecipeCardSkeleton key={i} />
      ))}
    </div>
  );
}
