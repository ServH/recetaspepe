"use client";

import Hero from '@/components/hero';
import { Suspense, useState } from 'react';
import { RecipeCardSkeleton } from '@/components/ui/skeletons';
import FeaturedRecipes from '@/components/featured-recipes';
import TopRatedRecipes from '@/components/top-rated-recipes';
import CategoryShowcase from '@/components/category-showcase';
import { Button } from '@/components/ui/button';
import { ChefHat, Clock, Search, TrendingUp, Flame, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function Home() {
  const [activeTab, setActiveTab] = useState("destacadas");
  const { theme } = useTheme();
  
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
    <div className="mx-auto">
      {/* Hero Section */}
      <section className="px-4 pt-8 pb-16">
        <Hero 
          title="Recetas de Pepe"
          subtitle="Descubre sabores auténticos con nuestras recetas caseras"
        />
      </section>
      
      {/* Quick Stats Section */}
      <motion.section 
        className="container px-4 py-10 mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <motion.div variants={item} className="bg-amber-50 dark:bg-amber-950/40 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center mb-3">
              <ChefHat className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-1">20+</h3>
            <p className="text-sm text-muted-foreground">Recetas caseras</p>
          </motion.div>
          
          <motion.div variants={item} className="bg-orange-50 dark:bg-orange-950/40 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/60 flex items-center justify-center mb-3">
              <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-1">30 min</h3>
            <p className="text-sm text-muted-foreground">Tiempo promedio</p>
          </motion.div>
          
          <motion.div variants={item} className="bg-red-50 dark:bg-red-950/40 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/60 flex items-center justify-center mb-3">
              <Flame className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-1">8+</h3>
            <p className="text-sm text-muted-foreground">Categorías</p>
          </motion.div>
          
          <motion.div variants={item} className="bg-rose-50 dark:bg-rose-950/40 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/60 flex items-center justify-center mb-3">
              <Star className="h-6 w-6 text-rose-600 dark:text-rose-400" />
            </div>
            <h3 className="text-xl font-bold mb-1">5⭐</h3>
            <p className="text-sm text-muted-foreground">Valoraciones</p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Recipes Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-950/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Nuestro recetario</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explora nuestra selección de recetas caseras, preparadas con ingredientes frescos y mucho amor.
              </p>
            </div>
            
            <div className="flex mt-6 md:mt-0 p-1 bg-gray-100 dark:bg-gray-800/50 rounded-xl">
              <Button 
                variant={activeTab === "destacadas" ? "default" : "ghost"}
                className={`rounded-lg ${activeTab === "destacadas" ? "" : "text-muted-foreground"}`}
                onClick={() => setActiveTab("destacadas")}
              >
                <Flame className="h-4 w-4 mr-2" />
                Destacadas
              </Button>
              <Button 
                variant={activeTab === "recientes" ? "default" : "ghost"}
                className={`rounded-lg ${activeTab === "recientes" ? "" : "text-muted-foreground"}`}
                onClick={() => setActiveTab("recientes")}
              >
                <Clock className="h-4 w-4 mr-2" />
                Recientes
              </Button>
              <Button 
                variant={activeTab === "valoradas" ? "default" : "ghost"}
                className={`rounded-lg ${activeTab === "valoradas" ? "" : "text-muted-foreground"}`}
                onClick={() => setActiveTab("valoradas")}
              >
                <Star className="h-4 w-4 mr-2" />
                Mejor valoradas
              </Button>
            </div>
          </div>
          
          <Suspense fallback={<RecipeCardsLoading />}>
            {activeTab === "destacadas" && <FeaturedRecipes />}
            {activeTab === "recientes" && <FeaturedRecipes activeTab="recientes" />}
            {activeTab === "valoradas" && <TopRatedRecipes />}
          </Suspense>
          
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <a href="/recetas">Ver todas las recetas</a>
            </Button>
          </div>
        </div>
      </motion.section>
      
      {/* Category Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Explora por categoría</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Encuentra fácilmente lo que buscas navegando por nuestras categorías de cocina.
            </p>
          </div>
          
          <CategoryShowcase />
        </div>
      </motion.section>
      
      {/* Call to action section */}
      <motion.section 
        className="py-16 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
            <div className="absolute inset-0 bg-pattern-food opacity-10"></div>
            <div className="relative p-12 lg:p-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Buscas algo específico?</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Encuentra rápidamente recetas por ingrediente, tipo de cocina o tiempo de preparación.
              </p>
              <Button 
                asChild 
                className="bg-white text-orange-600 hover:bg-white/90 px-8 py-6 rounded-xl text-lg"
              >
                <a href="/buscar" className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Buscar recetas
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function RecipeCardsLoading() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <RecipeCardSkeleton key={i} />
      ))}
    </div>
  );
}
