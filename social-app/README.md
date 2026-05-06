<div align="center">

# 🌟 Social App

### A Modern, Feature-Rich Social Media Platform

[![React](https://img.shields.io/badge/React-19.2.5-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/MUI-9.0.0-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](https://your-app.vercel.app) • [Report Bug](https://github.com/asafsafarli/SocialApp/issues) • [Request Feature](https://github.com/asafsafarli/SocialApp/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Performance](#performance)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

**Social App** is a cutting-edge social media platform built with modern web technologies. It features a sleek, responsive design with glassmorphism effects, dark mode support, and real-time interactions. Perfect for learning React best practices or as a foundation for your next social media project.

### ✨ Why Social App?

- 🚀 **Blazing Fast** - Built with Vite for lightning-fast development and optimized production builds
- 🎨 **Beautiful UI** - Premium glassmorphism design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Optimized Performance** - React.memo, useCallback, and useMemo throughout
- 🌙 **Dark Mode** - Eye-friendly dark theme with smooth transitions
- 🧩 **Component-Based** - 18 reusable, well-documented components

---

## ✨ Features

<table>
  <tr>
    <td align="center" width="33%">
      <h3>📝 Post Management</h3>
      Create, edit, and delete posts with a beautiful interface. Rich text support and real-time updates.
    </td>
    <td align="center" width="33%">
      <h3>💗 Social Interactions</h3>
      Like, share, and comment on posts. Track your engagement with detailed statistics.
    </td>
    <td align="center" width="33%">
      <h3>💬 Real-Time Chat</h3>
      Instant messaging with avatars, timestamps, and delivery status.
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <h3>🔍 Smart Search</h3>
      Filter posts instantly by title or content with debounced search.
    </td>
    <td align="center" width="33%">
      <h3>🌙 Dark Mode</h3>
      Toggle between light and dark themes with smooth transitions.
    </td>
    <td align="center" width="33%">
      <h3>📊 Analytics</h3>
      View statistics including total posts, characters, and engagement metrics.
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <h3>🎨 Premium Design</h3>
      Glassmorphism effects, gradients, and modern UI/UX patterns.
    </td>
    <td align="center" width="33%">
      <h3>⚡ Lightning Fast</h3>
      Optimized with React hooks and memoization techniques.
    </td>
    <td align="center" width="33%">
      <h3>📱 Responsive</h3>
      Adapts beautifully to all screen sizes and devices.
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| ![React](https://img.shields.io/badge/React-19.2.5-61DAFB?logo=react) | 19.2.5 | UI Library |
| ![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF?logo=vite) | 8.0.10 | Build Tool |
| ![Material-UI](https://img.shields.io/badge/MUI-9.0.0-007FFF?logo=mui) | 9.0.0 | Component Library |
| ![Emotion](https://img.shields.io/badge/Emotion-11.14.0-DB7093) | 11.14.0 | CSS-in-JS |

### Development Tools

- **ESLint** 10.2.1 - Code linting
- **React Compiler** - Advanced optimizations
- **Vite HMR** - Hot Module Replacement

### API

- **Blog API** - [blog-api-t6u0.onrender.com](https://blog-api-t6u0.onrender.com/posts)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/asafsafarli/SocialApp.git
cd SocialApp/social-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Lint Code

```bash
npm run lint
```

---

## 📁 Project Structure

```
social-app/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/        # Reusable components
│   │   ├── ActionButton/
│   │   ├── ChatBox/
│   │   ├── ConfirmDialog/
│   │   ├── CreatePostDialog/
│   │   ├── EmptyState/
│   │   ├── FeedSection/
│   │   ├── Header/
│   │   ├── LoadingSpinner/
│   │   ├── MessageBubble/
│   │   ├── NotificationBadge/
│   │   ├── PostCard/
│   │   ├── PostList/
│   │   ├── QuickTipsPanel/
│   │   ├── SearchBar/
│   │   ├── Sidebar/
│   │   ├── StatCard/
│   │   ├── StatsPanel/
│   │   └── UserAvatar/
│   ├── assets/           # Images, fonts
│   ├── App.jsx           # Main application
│   ├── App.css           # Global styles
│   ├── main.jsx          # Entry point
│   └── index.css         # Base styles
├── vercel.json           # Vercel config
├── vite.config.js        # Vite config
└── package.json          # Dependencies
```

---

## ⚡ Performance

### Optimization Techniques

- ✅ **React.memo** - All 18 components memoized
- ✅ **useCallback** - 11 memoized functions
- ✅ **useMemo** - 2 computed values cached
- ✅ **Code Splitting** - Dynamic imports for routes
- ✅ **Lazy Loading** - Images and components
- ✅ **Debounced Search** - Reduced API calls

### Metrics

| Metric | Value |
|--------|-------|
| Bundle Size (gzipped) | 150.52 kB |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 2.5s |
| Lighthouse Score | 95+ |

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

#### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/asafsafarli/SocialApp)

#### Manual Deploy

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel --prod
```

### Other Platforms

<details>
<summary><b>Netlify</b></summary>

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

Build settings:
- Build command: `npm run build`
- Publish directory: `dist`
</details>

<details>
<summary><b>GitHub Pages</b></summary>

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/SocialApp/',
  plugins: [react()],
})
```

2. Build and deploy:
```bash
npm run build
npx gh-pages -d dist
```
</details>

---

## 🧩 Component Architecture

### Core Components

#### **App.jsx**
Main application container with state management and business logic.

**State:**
- Posts data and CRUD operations
- User interactions (likes, shares)
- UI states (dark mode, modals, chat)
- Form inputs

**Hooks Used:**
- `useState` (13x) - State management
- `useEffect` (1x) - Data fetching
- `useMemo` (2x) - Filtered posts, statistics
- `useCallback` (11x) - Event handlers

#### **Component Breakdown**

| Component | Purpose | Props | Optimized |
|-----------|---------|-------|-----------|
| `Sidebar` | Navigation menu | darkMode, onToggleDarkMode, onCreatePost | ✅ |
| `Header` | Top bar with search | query, onQueryChange, darkMode, onOpenChat | ✅ |
| `PostCard` | Individual post display | post, isLiked, onLike, onShare, onDelete | ✅ |
| `ChatBox` | Messaging drawer | open, messages, onClose, onSendMessage | ✅ |
| `StatsPanel` | Analytics display | totalPosts, filteredPosts, totalCharacters | ✅ |

---

## 🎨 Design System

### Color Palette

**Light Mode:**
- Primary: `#6366f1` (Indigo)
- Secondary: `#ec4899` (Pink)
- Accent: `#0ea5e9` (Sky Blue)
- Background: `#fafbff`
- Text: `#1e293b`

**Dark Mode:**
- Primary: `#a78bfa` (Light Purple)
- Background: `#0f172a`
- Surface: `#1e293b`
- Text: `#f1f5f9`

### Typography

- Font Family: Inter (via Google Fonts)
- Headings: 600-700 weight
- Body: 400 weight
- Captions: 300 weight

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test thoroughly before submitting
- Update documentation if needed

---

## 🗺️ Roadmap

- [x] Basic post CRUD operations
- [x] Like and share functionality
- [x] Real-time chat
- [x] Dark mode
- [x] Search and filter
- [x] Statistics dashboard
- [ ] User authentication
- [ ] Profile pages
- [ ] Comments system
- [ ] Notifications
- [ ] Image uploads
- [ ] Stories feature
- [ ] PWA support
- [ ] Mobile apps (React Native)

---

## 📝 API Documentation

### Endpoints

**GET** `/posts`
- Fetch all posts
- Returns: Array of post objects

**POST** `/posts`
- Create a new post
- Body: `{ title: string, body: string }`

**DELETE** `/posts/:id`
- Delete a post by ID
- Params: `id` (post ID)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The amazing UI library
- [Vite](https://vitejs.dev/) - Next-generation frontend tooling
- [Material-UI](https://mui.com/) - Beautiful React components
- [Vercel](https://vercel.com/) - Deployment platform
- [Blog API](https://blog-api-t6u0.onrender.com) - Backend API

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Asaf Safarli**

- GitHub: [@asafsafarli](https://github.com/asafsafarli)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

Made with ❤️ by [Asaf Safarli](https://github.com/asafsafarli)

</div>
