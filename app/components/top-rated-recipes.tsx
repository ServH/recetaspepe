"use client";

import { useState, useEffect } from 'react';
import { getTopRatedRecipes } from "@/lib/data";
import RecipeCard from "./recipe-card";
import { motion } from "framer-motion";

export default function TopRatedRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  
  useEffect(() => {
    const topRated = getTopRatedRecipes();
    setRecipes(topRated);
    
    // Si no hay recetas valoradas, mostramos mensaje
    if (topRated.length === 0) {
      setIsEmpty(true);
    }
  }, []);

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

  if (isEmpty) {
    return (
      <motion.div 
        className="text-center py-12 bg-orange-50 dark:bg-orange-950/20 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-2">¡Sé el primero en valorar!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Todavía no hay recetas valoradas. Explora nuestras recetas y deja tu opinión.
        </p>
      </motion.div>
    );
  }

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
