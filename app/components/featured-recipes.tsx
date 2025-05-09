import { getRecipes } from "@/lib/data";
import RecipeCard from "./recipe-card";

export default function FeaturedRecipes() {
  // Obtener recetas
  const recipes = getRecipes();
  
  // Mostrar 6 recetas destacadas o todas si hay menos de 6
  const featuredRecipes = recipes.slice(0, 6);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {featuredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
