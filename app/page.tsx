import { Suspense } from 'react';
import Hero from '@/components/hero';
import { RecipeCardSkeleton } from '@/components/ui/skeletons';
import FeaturedRecipes from '@/components/featured-recipes';
import CategoryShowcase from '@/components/category-showcase';

export default function Home() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <Hero 
        title="Recetas de Pepe"
        subtitle="Descubre sabores auténticos con nuestras recetas caseras"
        imageUrl="/images/hero-image.jpg"
      />
      
      <section className="py-12">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Recetas Destacadas</h2>
        <Suspense fallback={<RecipeCardsLoading />}>
          <FeaturedRecipes />
        </Suspense>
      </section>
      
      <section className="py-12 bg-muted/50 rounded-lg">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Explora por Categoría</h2>
          <CategoryShowcase />
        </div>
      </section>
    </div>
  );
}

function RecipeCardsLoading() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <RecipeCardSkeleton key={i} />
      ))}
    </div>
  );
}
