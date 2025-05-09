"use client";

import { useState, useEffect } from 'react';
import { getRecipes, getRecentRecipes } from "@/lib/data";
import RecipeCard from "./recipe-card";
import { motion } from "framer-motion";

interface FeaturedRecipesProps {
  activeTab?: string;
}

export default function FeaturedRecipes({ activeTab = "destacadas" }: FeaturedRecipesProps) {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    // Usar los datos según la pestaña activa
    if (activeTab === "recientes") {
      setRecipes(getRecentRecipes());
    } else {
      // Para las destacadas, tomamos 4 recetas aleatorias
      const allRecipes = getRecipes();
      const shuffled = [...allRecipes].sort(() => 0.5 - Math.random());
      setRecipes(shuffled.slice(0, 4));
    }
  }, [activeTab]);

  // Animaciones para la grilla
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {recipes.map((recipe, index) => (
        <motion.div 
          key={`${recipe.id}-${index}`} 
          variants={item}
          className="h-full"
        >
          <RecipeCard recipe={recipe} />
        </motion.div>
      ))}
    </motion.div>
  );
}
