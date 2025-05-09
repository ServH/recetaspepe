"use client";

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RatingProps {
  recipeId: string;
  initialValue?: number;
  size?: 'sm' | 'md' | 'lg';
  readOnly?: boolean;
  showAverage?: boolean;
  className?: string;
  onChange?: (rating: number) => void;
}

export default function RecipeRating({
  recipeId,
  initialValue = 0,
  size = 'md',
  readOnly = false,
  showAverage = false,
  className,
  onChange,
}: RatingProps) {
  const [rating, setRating] = useState(initialValue);
  const [hoverRating, setHoverRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  
  // Tamaños de estrellas según el parámetro size
  const starSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  // Carga valoraciones al inicio
  useEffect(() => {
    loadRating();
    loadAverageRating();
  }, [recipeId]);

  // Guarda la valoración en localStorage
  const saveRating = (value: number) => {
    try {
      // Guardar valoración del usuario
      localStorage.setItem(`recipe-rating-${recipeId}`, value.toString());
      
      // Actualizar valoración media
      const ratings = JSON.parse(localStorage.getItem('recipe-ratings') || '{}');
      if (!ratings[recipeId]) {
        ratings[recipeId] = { sum: value, count: 1 };
      } else {
        // Si el usuario ya había valorado, actualizamos su valoración
        if (hasRated) {
          const oldValue = parseFloat(localStorage.getItem(`recipe-rating-${recipeId}`) || '0');
          ratings[recipeId].sum = ratings[recipeId].sum - oldValue + value;
        } else {
          ratings[recipeId].sum += value;
          ratings[recipeId].count += 1;
        }
      }
      
      localStorage.setItem('recipe-ratings', JSON.stringify(ratings));
      setHasRated(true);
      
      // Actualizar el promedio local
      loadAverageRating();
    } catch (error) {
      console.error('Error al guardar la valoración:', error);
    }
  };

  // Carga la valoración del usuario para esta receta
  const loadRating = () => {
    try {
      const savedRating = localStorage.getItem(`recipe-rating-${recipeId}`);
      if (savedRating) {
        setRating(parseFloat(savedRating));
        setHasRated(true);
      } else {
        setRating(initialValue);
        setHasRated(false);
      }
    } catch (error) {
      console.error('Error al cargar la valoración:', error);
    }
  };

  // Carga la valoración promedio de todos los usuarios
  const loadAverageRating = () => {
    try {
      const ratings = JSON.parse(localStorage.getItem('recipe-ratings') || '{}');
      if (ratings[recipeId]) {
        const average = ratings[recipeId].sum / ratings[recipeId].count;
        setAverageRating(parseFloat(average.toFixed(1)));
        setTotalRatings(ratings[recipeId].count);
      } else {
        setAverageRating(0);
        setTotalRatings(0);
      }
    } catch (error) {
      console.error('Error al cargar la valoración promedio:', error);
    }
  };

  // Maneja el clic en una estrella
  const handleRating = (value: number) => {
    if (readOnly) return;
    
    setRating(value);
    saveRating(value);
    
    if (onChange) {
      onChange(value);
    }
  };

  // Renderiza las estrellas
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => {
      const starValue = index + 1;
      const filled = readOnly 
        ? (showAverage ? starValue <= averageRating : starValue <= rating)
        : starValue <= (hoverRating || rating);
        
      return (
        <motion.div
          key={index}
          whileTap={{ scale: 0.9 }}
          className={cn(
            "cursor-pointer transition-colors duration-200",
            readOnly && "cursor-default"
          )}
          onMouseEnter={() => !readOnly && setHoverRating(starValue)}
          onMouseLeave={() => !readOnly && setHoverRating(0)}
          onClick={() => handleRating(starValue)}
        >
          <Star
            className={cn(
              starSizes[size],
              filled
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300 dark:text-gray-600",
              "transition-all duration-150",
              !readOnly && "hover:scale-110"
            )}
          />
        </motion.div>
      );
    });
  };

  return (
    <div className={cn("flex", className)}>
      <div className="flex space-x-1">
        {renderStars()}
      </div>
      
      {showAverage && totalRatings > 0 && (
        <div className="ml-2 text-sm text-muted-foreground flex items-center">
          <span className="font-medium text-foreground mr-1">{averageRating}</span>
          <span>({totalRatings})</span>
        </div>
      )}
    </div>
  );
}
