"use client";

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ChefHat, Users, Bookmark, Printer, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getRecipe, getRecipesByTag } from '@/lib/data';
import { formatTime, getDifficultyColor, getCategoryColor } from '@/lib/utils';
import RecipeCard from '@/components/recipe-card';
import RecipeRating from '@/components/recipe-rating';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface RecipeDetailPageProps {
  params: {
    id: string;
  };
}

export default function RecipeDetailPage({ params }: RecipeDetailPageProps) {
  const recipe = getRecipe(params.id);
  const [saved, setSaved] = useState(false);
  const [hasRated, setHasRated] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [ratingChanged, setRatingChanged] = useState(false);

  if (!recipe) {
    notFound();
  }

  useEffect(() => {
    // Verificar si el usuario ya ha valorado esta receta
    try {
      const savedRating = localStorage.getItem(`recipe-rating-${recipe.id}`);
      if (savedRating) {
        setHasRated(true);
      }
    } catch (error) {
      console.error('Error al cargar la valoración:', error);
    }

    // Verificar si el usuario ha guardado esta receta
    try {
      const savedRecipes = JSON.parse(localStorage.getItem('saved-recipes') || '[]');
      if (savedRecipes.includes(recipe.id)) {
        setSaved(true);
      }
    } catch (error) {
      console.error('Error al cargar recetas guardadas:', error);
    }
  }, [recipe.id]);

  // Obtener recetas relacionadas por etiquetas
  const relatedRecipes = getRecipesByTag(recipe.tags[0] || '')
    .filter(r => r.id !== recipe.id)
    .slice(0, 3);

  const handleSave = () => {
    try {
      const savedRecipes = JSON.parse(localStorage.getItem('saved-recipes') || '[]');
      
      if (saved) {
        // Eliminar de guardados
        const updatedSaved = savedRecipes.filter((id: string) => id !== recipe.id);
        localStorage.setItem('saved-recipes', JSON.stringify(updatedSaved));
      } else {
        // Añadir a guardados
        savedRecipes.push(recipe.id);
        localStorage.setItem('saved-recipes', JSON.stringify(savedRecipes));
      }
      
      setSaved(!saved);
    } catch (error) {
      console.error('Error al guardar la receta:', error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  const handleRatingClick = () => {
    setShowRatingModal(true);
  };

  const handleRatingChange = () => {
    setRatingChanged(true);
    setHasRated(true);
    
    // Ocultar el modal después de un breve tiempo
    setTimeout(() => {
      setShowRatingModal(false);
      // Resetear el estado para futuras valoraciones
      setTimeout(() => setRatingChanged(false), 500);
    }, 1000);
  };
    
  return (
    <div>
      {/* Hero imagen con overlay */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        
        {/* Contenido superpuesto */}
        <div className="absolute inset-x-0 bottom-0 container px-4 py-8">
          <Badge
            className={getCategoryColor(recipe.category)}
            variant="secondary"
          >
            {recipe.category}
          </Badge>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-2 max-w-4xl">{recipe.title}</h1>
          
          <p className="text-white/80 text-lg md:text-xl mb-6 max-w-2xl">{recipe.description}</p>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Clock className="h-4 w-4" />
              <span>{formatTime(recipe.time)}</span>
            </div>
            
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <ChefHat className="h-4 w-4" />
              <span>{recipe.difficulty}</span>
            </div>
            
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Users className="h-4 w-4" />
              <span>{recipe.servings} raciones</span>
            </div>
            
            {/* Valoración media */}
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <RecipeRating
                recipeId={recipe.id}
                size="sm"
                readOnly={true}
                showAverage={true}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Botones de acción */}
          <div className="flex justify-between mb-8">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={handleRatingClick}
            >
              <Star className="h-4 w-4 mr-2" />
              {hasRated ? 'Modificar valoración' : 'Valorar receta'}
            </Button>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full"
                onClick={handleSave}
              >
                <Bookmark className={`h-4 w-4 mr-2 ${saved ? 'fill-primary' : ''}`} />
                {saved ? 'Guardada' : 'Guardar'}
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full"
                onClick={handlePrint}
              >
                <Printer className="h-4 w-4 mr-2" />
                Imprimir
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>
          
          <div className="grid gap-12 md:grid-cols-7 mb-12">
            {/* Ingredientes */}
            <motion.div 
              className="md:col-span-2 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 p-2 rounded-lg mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                    <path d="M7 2v20"></path>
                    <path d="M21 15V2"></path>
                    <path d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                  </svg>
                </span>
                Ingredientes
              </h2>
              
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3 text-base"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <span className="h-2 w-2 bg-amber-500 rounded-full"></span>
                    <span>{ingredient}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Preparación */}
            <motion.div 
              className="md:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 p-2 rounded-lg mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"></path>
                    <path d="M8 8V7c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v1"></path>
                    <path d="M12 17v-7"></path>
                    <path d="M13 12h2"></path>
                    <path d="M13 17h4"></path>
                    <rect width="18" height="12" x="3" y="8" rx="1"></rect>
                  </svg>
                </span>
                Preparación
              </h2>
              
              <ol className="space-y-8">
                {recipe.steps.map((step) => (
                  <motion.li 
                    key={step.id} 
                    className="relative pl-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + step.id * 0.1 }}
                  >
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 font-bold">
                      {step.id}
                    </div>
                    <div className="pt-1">
                      <p className="text-base">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </div>
          
          {/* Etiquetas */}
          <motion.div 
            className="border-t border-b py-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-muted-foreground mr-2">Etiquetas:</span>
              {recipe.tags.map((tag) => (
                <Link key={tag} href={`/buscar?tag=${tag}`}>
                  <Badge 
                    variant="outline" 
                    className="hover:bg-secondary transition-colors hover:text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </motion.div>
          
          {/* Recetas relacionadas */}
          {relatedRecipes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Recetas relacionadas</h2>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {relatedRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Modal de valoración */}
      {showRatingModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center print:hidden">
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-md w-full mx-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">
              {ratingChanged ? '¡Gracias por tu valoración!' : 'Valora esta receta'}
            </h3>
            
            {!ratingChanged ? (
              <>
                <p className="text-muted-foreground text-center mb-6">
                  Tu opinión nos ayuda a mejorar nuestras recetas
                </p>
                
                <div className="flex justify-center mb-6">
                  <RecipeRating 
                    recipeId={recipe.id}
                    size="lg"
                    onChange={handleRatingChange}
                  />
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowRatingModal(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center"
              >
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}

// Componente Star para evitar importar lucide-react en la página completa
function Star({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
