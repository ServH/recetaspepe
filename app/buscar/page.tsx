"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { searchRecipes, getRecipesByTag, getPopularTags } from '@/lib/data';
import RecipeCard from '@/components/recipe-card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialTag = searchParams.get('tag') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [activeTag, setActiveTag] = useState(initialTag);
  const popularTags = getPopularTags();

  useEffect(() => {
    if (initialQuery) {
      setResults(searchRecipes(initialQuery));
    } else if (initialTag) {
      setResults(getRecipesByTag(initialTag));
      setActiveTag(initialTag);
    }
  }, [initialQuery, initialTag]);

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveTag('');
    setResults(searchRecipes(searchQuery));
    
    // Update URL without page reload
    const url = new URL(window.location.href);
    url.searchParams.set('q', searchQuery);
    url.searchParams.delete('tag');
    window.history.pushState({}, '', url);
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    setSearchQuery('');
    setResults(getRecipesByTag(tag));
    
    // Update URL without page reload
    const url = new URL(window.location.href);
    url.searchParams.delete('q');
    url.searchParams.set('tag', tag);
    window.history.pushState({}, '', url);
  };

  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Buscar Recetas</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar por nombre, ingrediente o categoría..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit">Buscar</Button>
        </div>
      </form>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Etiquetas populares</h2>
        <div className="flex flex-wrap gap-2">
          {popularTags.map(({ tag, count }) => (
            <Badge
              key={tag}
              variant={activeTag === tag ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => handleTagClick(tag)}
            >
              {tag} ({count})
            </Badge>
          ))}
        </div>
      </div>

      {(searchQuery || activeTag) && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {activeTag ? (
              <>Recetas con la etiqueta <span className="text-primary">{activeTag}</span></>
            ) : (
              <>Resultados para <span className="text-primary">{searchQuery}</span></>
            )}
          </h2>
          <p className="text-muted-foreground">
            Se encontraron {results.length} {results.length === 1 ? 'receta' : 'recetas'}
          </p>
        </div>
      )}

      {results.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        searchQuery || activeTag ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-2">No se encontraron resultados</h2>
            <p className="text-muted-foreground">
              Prueba con otra búsqueda o navega por nuestras categorías.
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-2">Descubre nuestras recetas</h2>
            <p className="text-muted-foreground">
              Usa el buscador o navega por etiquetas para encontrar inspiración para tu próxima comida.
            </p>
          </div>
        )
      )}
    </div>
  );
}
