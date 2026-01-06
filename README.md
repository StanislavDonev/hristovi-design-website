# Hristovi Design - Furniture Website

A modern, responsive furniture e-commerce website built with React and TypeScript, inspired by professional e-commerce design patterns.

## Features

- 🎨 Modern, clean design
- 📱 Fully responsive layout
- 🎠 Hero slider with multiple slides
- 📦 Product catalog with categories
- 🛒 Shopping cart functionality
- ❤️ Wishlist support
- 📧 Newsletter subscription
- 🌐 Multi-language ready (Bulgarian)

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
furniture_website/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Categories.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Newsletter.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Components

- **Header** - Navigation bar with logo, menu, and action buttons
- **Hero** - Auto-rotating hero slider with call-to-action buttons
- **Categories** - Product category cards with icons
- **FeaturedProducts** - Grid of featured products with prices and actions
- **Newsletter** - Email subscription form
- **Footer** - Site information, links, and contact details

## Customization

To customize the website for your needs:

1. Update the brand name in all components
2. Replace emoji icons with real images
3. Add actual product data from your backend/API
4. Customize colors in the CSS files
5. Add more pages and routes

## License

This project is created for educational purposes.
