"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ChefHat } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/recetas', label: 'Recetas' },
  { href: '/categorias', label: 'Categorías' },
  { href: '/buscar', label: 'Buscar' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white dark:bg-gray-950 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:border-gray-800" 
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="flex items-center justify-center p-1.5 bg-gradient-to-br from-amber-400 to-orange-600 text-white rounded-md">
              <ChefHat className="h-6 w-6" />
            </span>
            <span className="hidden font-bold sm:inline-block text-xl">Recetas de Pepe</span>
          </Link>
          <nav className="flex items-center space-x-8 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80 relative py-1",
                  pathname === link.href 
                    ? "text-foreground font-semibold" 
                    : "text-foreground/60"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full"
                    layoutId="nav-underline"
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
              <span className="flex items-center justify-center p-1.5 bg-gradient-to-br from-amber-400 to-orange-600 text-white rounded-md">
                <ChefHat className="h-5 w-5" />
              </span>
              <span className="font-bold">Recetas de Pepe</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/buscar">
              <Button variant="ghost" size="icon" className="mr-2">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <ThemeToggle />
            <Button
              variant="ghost"
              className="ml-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] overflow-auto bg-white dark:bg-gray-950 p-6 pb-32 shadow-md md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="grid grid-flow-row auto-rows-max text-lg gap-6 p-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex w-full items-center py-3 font-medium",
                      pathname === link.href 
                        ? "text-orange-600 dark:text-orange-500" 
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <div className="h-px bg-gray-100 dark:bg-gray-800" />
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
