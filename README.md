# Flowbee

A React + Tailwind CSS project built with Vite.

## Getting Started

```bash
npm install
npm run dev
```

## Folder Structure

```
src/
├── assets/       # Static assets (images, fonts, icons)
├── components/   # Shared/reusable UI components
├── config/       # App configuration (env, feature flags)
├── constants/    # App-wide constants
├── features/     # Feature modules (co-located components, hooks, services)
├── hooks/        # Custom React hooks
├── layout/       # Layout components (RootLayout, etc.)
├── pages/        # Page-level components mapped to routes
├── router/       # React Router configuration
├── services/     # API service layer
├── utils/        # Helper / utility functions
├── App.jsx       # Root App component
├── i18n.js       # Internationalisation setup
└── main.jsx      # Application entry point
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
```
