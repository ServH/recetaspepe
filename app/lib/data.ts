import { Recipe, Category } from "@/types/recipe";

// Categorías de recetas
const categories: Category[] = [
  {
    id: "1",
    name: "Desayuno",
    slug: "desayuno",
    description: "Recetas deliciosas para empezar el día con energía",
    image: "https://images.unsplash.com/photo-1533089860892-a9b6be52eff3?q=80&w=2070",
    count: 2,
  },
  {
    id: "2",
    name: "Almuerzo",
    slug: "almuerzo",
    description: "Platos principales para disfrutar en el almuerzo",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070",
    count: 1,
  },
  {
    id: "3",
    name: "Cena",
    slug: "cena",
    description: "Cenas ligeras y nutritivas para terminar el día",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2013",
    count: 1,
  },
  {
    id: "4",
    name: "Postres",
    slug: "postres",
    description: "Dulces y postres para cualquier ocasión",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2087",
    count: 1,
  },
  {
    id: "5",
    name: "Bebidas",
    slug: "bebidas",
    description: "Bebidas refrescantes y preparados especiales",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1978",
    count: 1,
  },
  {
    id: "6",
    name: "Aperitivos",
    slug: "aperitivos",
    description: "Entrantes y aperitivos para compartir",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2070",
    count: 1,
  },
  {
    id: "7",
    name: "Vegetariano",
    slug: "vegetariano",
    description: "Platos vegetarianos llenos de sabor",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070",
    count: 1,
  },
  {
    id: "8",
    name: "Vegano",
    slug: "vegano",
    description: "Recetas veganas nutritivas y sabrosas",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070",
    count: 1,
  },
];

// Recetas de ejemplo
const recipes: Recipe[] = [
  {
    id: "1",
    title: "Tortilla Española con Cebolla",
    description: "La auténtica tortilla española con un toque dulce gracias a la cebolla caramelizada.",
    image: "https://images.unsplash.com/photo-1626923725782-9a93b4d5db0a?q=80&w=1974",
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
    image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?q=80&w=1964",
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
    image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?q=80&w=2070",
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
    image: "https://images.unsplash.com/photo-1604246913309-cec7c524066a?q=80&w=2070",
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
  },
  {
    id: "5",
    title: "Smoothie Bowl de Frutos Rojos",
    description: "Un desayuno refrescante, nutritivo y lleno de antioxidantes para empezar el día con energía.",
    image: "https://images.unsplash.com/photo-1606850780554-b55706813cd4?q=80&w=1974",
    time: 15,
    difficulty: "Fácil",
    category: "Desayuno",
    tags: ["Vegano", "Sin Gluten", "Saludable"],
    ingredients: [
      "1 taza de frutos rojos congelados",
      "1 plátano maduro",
      "1/2 taza de leche vegetal",
      "1 cucharada de semillas de chía",
      "Toppings: granola, coco rallado, fruta fresca"
    ],
    steps: [
      {
        id: 1,
        description: "Añade los frutos rojos congelados, el plátano y la leche vegetal a la batidora.",
      },
      {
        id: 2,
        description: "Bate hasta conseguir una mezcla cremosa y espesa.",
      },
      {
        id: 3,
        description: "Sirve en un bol y decora con semillas de chía, granola y otros toppings.",
      }
    ],
    servings: 1,
    createdAt: "2023-12-01T08:30:00Z",
    updatedAt: "2023-12-10T10:15:00Z",
  },
  {
    id: "6",
    title: "Gazpacho Andaluz",
    description: "Refrescante sopa fría perfecta para los días calurosos de verano, llena de vitaminas y sabor.",
    image: "https://images.unsplash.com/photo-1597226051193-7d9b9200bb6b?q=80&w=1974",
    time: 25,
    difficulty: "Fácil",
    category: "Aperitivos",
    tags: ["Español", "Verano", "Vegano"],
    ingredients: [
      "1kg de tomates maduros",
      "1 pepino",
      "1 pimiento verde",
      "1 diente de ajo",
      "100ml de aceite de oliva",
      "30ml de vinagre",
      "Sal"
    ],
    steps: [
      {
        id: 1,
        description: "Lava y trocea todas las verduras.",
      },
      {
        id: 2,
        description: "Tritúralas junto con el ajo, aceite, vinagre y sal.",
      },
      {
        id: 3,
        description: "Pasa por un colador para eliminar las pieles y pepitas.",
      },
      {
        id: 4,
        description: "Refrigera al menos 2 horas antes de servir.",
      }
    ],
    servings: 4,
    createdAt: "2023-07-05T15:45:00Z",
    updatedAt: "2023-07-15T18:20:00Z",
  },
  {
    id: "7",
    title: "Mojito Refrescante",
    description: "El cóctel perfecto para cualquier ocasión, refrescante y fácil de preparar.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1978",
    time: 10,
    difficulty: "Fácil",
    category: "Bebidas",
    tags: ["Cóctel", "Ron", "Verano"],
    ingredients: [
      "50ml de ron blanco",
      "1 lima",
      "10 hojas de hierbabuena",
      "2 cucharadas de azúcar",
      "Agua con gas",
      "Hielo"
    ],
    steps: [
      {
        id: 1,
        description: "Exprime la lima y trocea en gajos.",
      },
      {
        id: 2,
        description: "En un vaso alto, machaca las hojas de hierbabuena con el azúcar y el zumo de lima.",
      },
      {
        id: 3,
        description: "Añade el ron, el hielo y completa con agua con gas.",
      },
      {
        id: 4,
        description: "Decora con una rodaja de lima y hojas de hierbabuena frescas.",
      }
    ],
    servings: 1,
    createdAt: "2023-08-20T21:15:00Z",
    updatedAt: "2023-08-25T14:30:00Z",
  },
  {
    id: "8",
    title: "Ensalada Mediterránea",
    description: "Una ensalada fresca y saludable con todos los sabores del Mediterráneo.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974",
    time: 15,
    difficulty: "Fácil",
    category: "Almuerzo",
    tags: ["Vegetariano", "Saludable", "Mediterráneo"],
    ingredients: [
      "Lechuga variada",
      "200g de queso feta",
      "1 pepino",
      "200g de tomates cherry",
      "1 cebolla roja",
      "Aceitunas negras",
      "Orégano",
      "Aceite de oliva",
      "Vinagre balsámico"
    ],
    steps: [
      {
        id: 1,
        description: "Lava y trocea la lechuga y colócala en una fuente.",
      },
      {
        id: 2,
        description: "Corta el pepino, los tomates y la cebolla y añádelos a la lechuga.",
      },
      {
        id: 3,
        description: "Desmenuza el queso feta por encima y agrega las aceitunas.",
      },
      {
        id: 4,
        description: "Aliña con aceite, vinagre y orégano al gusto.",
      }
    ],
    servings: 2,
    createdAt: "2023-06-15T12:20:00Z",
    updatedAt: "2023-06-25T09:45:00Z",
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

export function getRecentRecipes(): Recipe[] {
  return [...recipes].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 4);
}

// Función para obtener recetas mejor valoradas (client-side)
export function getTopRatedRecipes(): Recipe[] {
  // Esta función debe llamarse solo en el cliente
  if (typeof window === 'undefined') {
    return recipes.slice(0, 4);
  }
  
  try {
    const ratingsData = JSON.parse(localStorage.getItem('recipe-ratings') || '{}');
    
    // Calcular valoración media para cada receta
    const ratedRecipes = recipes.map(recipe => {
      const rating = ratingsData[recipe.id];
      const averageRating = rating ? rating.sum / rating.count : 0;
      return {
        ...recipe,
        averageRating,
      };
    });
    
    // Ordenar por valoración (de mayor a menor)
    return ratedRecipes
      .filter(recipe => recipe.averageRating > 0) // Solo recetas con valoraciones
      .sort((a, b) => b.averageRating - a.averageRating)
      .slice(0, 4); // Tomar las 4 mejor valoradas
  } catch (error) {
    console.error('Error al obtener las recetas mejor valoradas:', error);
    return recipes.slice(0, 4);
  }
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
