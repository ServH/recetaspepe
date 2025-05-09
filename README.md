# 🍲 Recetas de Pepe

Una moderna y elegante aplicación web para compartir y descubrir recetas de cocina, con una interfaz atractiva optimizada para dispositivos móviles y de escritorio.

## ✨ Características principales

- **Diseño moderno y minimalista** con animaciones sutiles
- **Búsqueda avanzada** por nombre, categoría o etiquetas
- **Navegación intuitiva** entre categorías y recetas
- **Interfaz responsiva** adaptada a todos los dispositivos
- **Modo oscuro** integrado para mejor accesibilidad
- **Experiencia visual atractiva** con transiciones suaves

## 🖥️ Capturas de pantalla

### Pantalla de inicio
La página principal presenta un diseño limpio con una sección de héroe llamativa, estadísticas destacadas, recetas populares y categorías en un formato visual moderno.

### Detalle de receta
Cada receta muestra una imagen destacada, información clara sobre tiempo de preparación, dificultad e ingredientes, y pasos detallados para la elaboración.

### Exploración por categorías
Navega visualmente a través de las diferentes categorías culinarias con tarjetas interactivas y atractivas.

## 🛠️ Tecnologías utilizadas

- **Next.js 14**: Framework de React para aplicaciones web modernas
- **TypeScript**: Tipado estático para un código más robusto
- **Tailwind CSS**: Framework de utilidades CSS para diseño rápido y consistente
- **Framer Motion**: Biblioteca para animaciones fluidas y profesionales
- **shadcn/ui**: Componentes de interfaz elegantes y accesibles

## 🚀 Cómo ejecutar el proyecto

### Requisitos previos
- Node.js 18.0 o superior
- npm o yarn

### Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/ServH/recetaspepe.git

# Entrar en el directorio
cd recetaspepe

# Instalar dependencias
npm install
# o con yarn
yarn install

# Iniciar el servidor de desarrollo
npm run dev
# o con yarn
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📁 Estructura del proyecto

```
recetaspepe/
├── app/                      # Directorio principal (App Router)
│   ├── components/           # Componentes reutilizables
│   │   ├── ui/               # Componentes UI base
│   │   └── ...               # Otros componentes
│   ├── lib/                  # Funciones utilitarias
│   │   ├── data.ts           # Datos de ejemplo
│   │   └── utils.ts          # Utilidades generales
│   ├── types/                # Definiciones TypeScript
│   ├── buscar/               # Página de búsqueda
│   ├── categorias/           # Páginas de categorías
│   ├── recetas/              # Páginas de recetas
│   ├── globals.css           # Estilos globales
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página de inicio
├── public/                   # Archivos estáticos
└── ...                       # Archivos de configuración
```

## 🌟 Características en detalle

### Página de inicio
- **Hero section** atractiva con gradiente y elementos visuales
- **Estadísticas rápidas** para mostrar información general
- **Recetas destacadas** con opción para filtrar entre destacadas y recientes
- **Exploración por categoría** con tarjetas interactivas
- **Llamada a la acción** para la búsqueda personalizada

### Recetas
- **Tarjetas de receta** con efecto hover y transiciones suaves
- **Vista detallada** con imágenes destacadas y fondo con degradado
- **Ingredientes y pasos** visualmente diferenciados
- **Etiquetas interactivas** para encontrar recetas relacionadas
- **Funcionalidad de guardado, compartir e imprimir**

### Categorías
- **Navegación visual** con tarjetas interactivas para cada categoría
- **Listado de recetas por categoría** con diseño responsivo
- **Animaciones** para mejorar la experiencia de usuario

### Sistema de búsqueda
- **Búsqueda por texto** para encontrar recetas por nombre o ingredientes
- **Filtrado por etiquetas** para refinar resultados
- **Visualización clara** de los resultados de búsqueda

### Tema oscuro
- Soporte completo para **modo claro y oscuro**
- Paleta de colores cálida que mantiene la identidad visual en ambos modos
- **Transiciones suaves** entre temas

## 🔍 Funcionalidades adicionales

- **Animaciones de carga** con Framer Motion para mejorar la experiencia visual
- **Componentes UI optimizados** para rendimiento y accesibilidad
- **Diseño responsivo** para todos los tamaños de pantalla
- **Navegación intuitiva** con feedback visual

## 📱 Optimización para móviles

La aplicación está completamente optimizada para dispositivos móviles:
- Menú hamburguesa en pantallas pequeñas
- Diseño adaptativo para diferentes tamaños de pantalla
- Interacciones optimizadas para pantallas táctiles

## 🔮 Mejoras futuras

- **Backend con base de datos** para almacenar recetas de usuarios
- **Sistema de autenticación** para cuentas personalizadas
- **Comentarios y valoraciones** en recetas
- **Planificador de comidas** semanal
- **Lista de compras** generada automáticamente

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
