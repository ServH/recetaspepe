# Recetas de Pepe

Una aplicación web moderna para compartir y descubrir deliciosas recetas de cocina.

## 🍳 Características

- Navegación intuitiva y minimalista
- Búsqueda avanzada por nombre, categoría o etiquetas
- Filtros por dificultad y tiempo de preparación
- Responsive design para dispositivos móviles y de escritorio
- Modo oscuro para lectura cómoda
- Interfaz limpia y elegante

## 🛠️ Tecnologías

- **Next.js 14** con TypeScript y App Router 
- **Tailwind CSS** para estilos
- **shadcn/ui** para componentes de interfaz
- **Framer Motion** para animaciones sutiles

## 📋 Estructura del Proyecto

```
recetaspepe/
├── app/                      # Directorio principal de la aplicación
│   ├── components/           # Componentes reutilizables
│   │   ├── ui/               # Componentes de UI básicos (shadcn)
│   │   └── ...               # Otros componentes
│   ├── lib/                  # Utilidades y funciones auxiliares
│   ├── types/                # Definiciones de tipos TypeScript
│   ├── buscar/               # Página de búsqueda
│   ├── categorias/           # Páginas de categorías
│   ├── recetas/              # Páginas de recetas
│   ├── globals.css           # Estilos globales
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página de inicio
├── public/                   # Archivos estáticos (imágenes, etc.)
├── tailwind.config.js        # Configuración de Tailwind CSS
├── next.config.js            # Configuración de Next.js
└── package.json              # Dependencias y scripts
```

## 🚀 Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

```bash
# Clonar el repositorio
git clone https://github.com/ServH/recetaspepe.git

# Entrar en el directorio
cd recetaspepe

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

Después de ejecutar estos comandos, la aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- Dispositivos móviles
- Tablets
- Ordenadores de escritorio

## 🎨 Tema Oscuro

Para activar el tema oscuro:
1. Haz clic en el botón de tema en la barra de navegación
2. O configúralo para que siga el tema de tu sistema operativo

## 📝 Funcionalidades

- **Explorar recetas**: Navega por todas las recetas disponibles
- **Buscar recetas**: Busca por nombre, ingredientes o etiquetas
- **Filtrar por categoría**: Encuentra recetas por tipo de plato
- **Ver detalles**: Instrucciones paso a paso, ingredientes y tiempo de preparación
- **Explorar etiquetas**: Descubre recetas relacionadas por etiquetas

## 🧩 Extensibilidad

El proyecto está diseñado para ser fácilmente extensible:

- Añadir nuevas recetas en `app/lib/data.ts`
- Personalizar estilos en `tailwind.config.js`
- Añadir nuevas páginas siguiendo la estructura del App Router

## 🔮 Mejoras Futuras

- Implementación de backend con base de datos real
- Sistema de autenticación para añadir recetas personalizadas
- Función para guardar recetas favoritas
- Función de compartir en redes sociales
- Sistema de valoración y comentarios en recetas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
