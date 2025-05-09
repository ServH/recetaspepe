import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case "fácil":
    case "facil":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "media":
    case "intermedio":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
    case "difícil":
    case "dificil":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
}

export function getCategoryColor(category: string): string {
  const categories: Record<string, string> = {
    "desayuno": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "almuerzo": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    "cena": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    "postres": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    "bebidas": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "aperitivos": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "sopas": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    "ensaladas": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "carnes": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    "pescados": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    "vegetariano": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    "vegano": "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",
  };

  return categories[category.toLowerCase()] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
}

export function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours} h`;
  }
  
  return `${hours} h ${remainingMinutes} min`;
}
