# Social App

A modern social media application built with React, Vite, and Material-UI featuring posts, likes, shares, dark mode, and real-time chat.

## Features

- 📝 Create, view, and delete posts
- 💗 Like and share posts
- 🌙 Dark mode support
- 💬 Chat functionality
- 🔍 Search posts
- 📊 Statistics panel
- 🎨 Premium glassmorphism design

## Tech Stack

- React 19 with hooks (useState, useCallback, useMemo, useEffect, memo)
- Vite 8 for fast development and building
- Material-UI for components and icons
- CSS with custom properties for theming
- Blog API for post management

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Deploy from the project directory:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=your-repo-url)

## Environment Variables

No environment variables required. The app uses the public blog API at `https://blog-api-t6u0.onrender.com/posts`.

## Performance Optimizations

- React.memo on all components
- useCallback for event handlers
- useMemo for filtered data
- Lazy loading and code splitting

## License

MIT
