import { Recipe, Category } from "@/types/recipe";

// Categorías de recetas
const categories: Category[] = [
  {
    id: "1",
    name: "Desayuno",
    slug: "desayuno",
    description: "Recetas deliciosas para empezar el día con energía",
    image: "https://images.unsplash.com/photo-1533089860892-a9b6be52eff3?q=80&w=640&auto=format&fit=crop",
    count: 2,
  },
  {
    id: "2",
    name: "Almuerzo",
    slug: "almuerzo",
    description: "Platos principales para disfrutar en el almuerzo",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=640&auto=format&fit=crop",
    count: 1,
  },
  {
    id: "3",
    name: "Cena",
    slug: "cena",
    description: "Cenas ligeras y nutritivas para terminar el día",
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=640&auto=format&fit=crop",
    count: 1,
  },
  {
    id: "4",
    name: "Postres",
    slug: "postres",
    description: "Dulces y postres para cualquier ocasión",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=640&auto=format&fit=crop",
    count: 1,
  }
];

// Recetas de ejemplo
const recipes: Recipe[] = [
  {
    id: "1",
    title: "Tortilla Española con Cebolla",
    description: "La auténtica tortilla española con un toque dulce gracias a la cebolla caramelizada.",
    image: "https://images.unsplash.com/photo-1607118750046-da67fd78fea4?q=80&w=640&auto=format&fit=crop",
    time: 35,
    difficulty: "Media",
    category: "Almuerzo",
    tags: ["Español", "Huevos", "Tradicional"],
    ingredients: [
      "6 huevos",
      "3 patatas medianas",
      "1 cebolla grande",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    steps: [
      {
        id: 1,
        description: "Pela y corta las patatas en rodajas finas. Sala ligeramente.",
      },
      {
        id: 2,
        description: "Corta la cebolla en juliana y sofríela hasta que esté dorada.",
      },
      {
        id: 3,
        description: "Fríe las patatas a fuego medio-bajo hasta que estén tiernas.",
      },
      {
        id: 4,
        description: "Bate los huevos, añade las patatas y la cebolla. Cuaja la tortilla por ambos lados.",
      }
    ],
    servings: 4,
    createdAt: "2023-05-10T10:30:00Z",
    updatedAt: "2023-06-12T14:45:00Z",
  },
  {
    id: "2",
    title: "Pancakes de Avena y Plátano",
    description: "Deliciosos pancakes saludables, perfectos para un desayuno nutritivo.",
    image: "https://images.unsplash.com/photo-1619052603822-2be8ceacf6be?q=80&w=640&auto=format&fit=crop",
    time: 20,
    difficulty: "Fácil",
    category: "Desayuno",
    tags: ["Saludable", "Sin Azúcar", "Vegetariano"],
    ingredients: [
      "2 plátanos maduros",
      "2 huevos",
      "100g de avena en copos",
      "1 cucharadita de canela",
      "Aceite de coco para la sartén"
    ],
    steps: [
      {
        id: 1,
        description: "Tritura la avena hasta obtener una harina fina.",
      },
      {
        id: 2,
        description: "Añade los plátanos, huevos y canela. Bate hasta obtener una masa.",
      },
      {
        id: 3,
        description: "Cocina pequeñas porciones en una sartén con aceite de coco.",
      }
    ],
    servings: 2,
    createdAt: "2023-08-15T08:10:00Z",
    updatedAt: "2023-09-02T12:45:00Z",
  },
  {
    id: "3",
    title: "Tarta de Chocolate sin Horno",
    description: "Una tarta cremosa y fácil de preparar sin necesidad de horno.",
    image: "https://images.unsplash.com/photo-1607257891355-fca11286ae60?q=80&w=640&auto=format&fit=crop",
    time: 30,
    difficulty: "Fácil",
    category: "Postres",
    tags: ["Chocolate", "Sin Horno", "Postre"],
    ingredients: [
      "200g de galletas",
      "100g de mantequilla",
      "200g de chocolate negro",
      "200ml de nata para montar",
      "50g de azúcar"
    ],
    steps: [
      {
        id: 1,
        description: "Tritura las galletas y mézclalas con la mantequilla derretida para la base.",
      },
      {
        id: 2,
        description: "Derrite el chocolate, mezcla con la nata montada y el azúcar.",
      },
      {
        id: 3,
        description: "Vierte sobre la base y refrigera 4 horas mínimo.",
      }
    ],
    servings: 8,
    createdAt: "2023-07-18T16:20:00Z",
    updatedAt: "2023-08-05T09:15:00Z",
  },
  {
    id: "4",
    title: "Curry de Verduras",
    description: "Un curry vegano reconfortante y nutritivo, perfecto para una cena rápida.",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=640&auto=format&fit=crop",
    time: 30,
    difficulty: "Fácil",
    category: "Cena",
    tags: ["Vegano", "Curry", "Saludable"],
    ingredients: [
      "1 calabacín",
      "1 berenjena",
      "2 zanahorias",
      "1 lata de leche de coco",
      "2 cucharadas de curry en polvo",
      "Arroz para acompañar"
    ],
    steps: [
      {
        id: 1,
        description: "Corta todas las verduras en dados medianos.",
      },
      {
        id: 2,
        description: "Saltea las verduras en una sartén con un poco de aceite.",
      },
      {
        id: 3,
        description: "Añade el curry y la leche de coco. Cocina 15 minutos a fuego medio.",
      },
      {
        id: 4,
        description: "Sirve con arroz cocido.",
      }
    ],
    servings: 4,
    createdAt: "2023-09-10T19:15:00Z",
    updatedAt: "2023-10-05T21:30:00Z",
  }
];

// Exportar funciones para obtener datos
export function getCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}

export function getRecipes(): Recipe[] {
  return recipes;
}

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find(recipe => recipe.id === id);
}

export function getRecipesByCategory(category: string): Recipe[] {
  return recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase());
}

export function getRecipesByTag(tag: string): Recipe[] {
  return recipes.filter(recipe => 
    recipe.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function searchRecipes(query: string): Recipe[] {
  const lowerCaseQuery = query.toLowerCase();
  return recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(lowerCaseQuery) ||
    recipe.description.toLowerCase().includes(lowerCaseQuery) ||
    recipe.category.toLowerCase().includes(lowerCaseQuery) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery))
  );
}

export function getPopularTags(): { tag: string; count: number }[] {
  const tags: Record<string, number> = {};
  
  recipes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (tags[tag]) {
        tags[tag]++;
      } else {
        tags[tag] = 1;
      }
    });
  });
  
  return Object.entries(tags)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}
