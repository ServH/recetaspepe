import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getCategory, getRecipesByCategory } from '@/lib/data';
import RecipeCard from '@/components/recipe-card';
import { RecipeCardSkeleton } from '@/components/ui/skeletons';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: CategoryPageProps) {
  const category = getCategory(params.slug);
  
  if (!category) {
    return {
      title: 'Categoría no encontrada - Recetas de Pepe',
      description: 'Lo sentimos, la categoría que buscas no se ha encontrado.',
    };
  }

  return {
    title: `${category.name} - Recetas de Pepe`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategory(params.slug);

  if (!category) {
    notFound();
  }

  const recipes = getRecipesByCategory(category.name);

  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-4">{category.name}</h1>
      <p className="text-lg text-muted-foreground mb-10">
        {category.description}
      </p>

      <Suspense fallback={<RecipesGridSkeleton />}>
        {recipes.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-2">No hay recetas en esta categoría</h2>
            <p className="text-muted-foreground">
              Lo sentimos, aún no hemos añadido recetas a esta categoría. ¡Vuelve pronto!
            </p>
          </div>
        )}
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
