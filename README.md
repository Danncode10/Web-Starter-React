# React Stable Starter

A production-ready, beginner-friendly starter repository for building blank websites with React, Tailwind CSS, and Bootstrap. Designed for maximum compatibility, minimal install errors, and clean software engineering practices.

## What This Is

This starter provides a blank canvas for React applications, pre-configured with:
- React 18.2.0 with Vite for fast development
- Tailwind CSS 3.4.1 for utility-first styling
- Bootstrap 5.3.3 (CSS-only) for component classes
- Essential libraries like React Router, Axios, and clsx

It's perfect for beginners who want to start coding immediately without wrestling with setup issues, and for experienced developers who need a reliable, stable foundation.

## Why This Starter?

- **Zero Peer Dependency Conflicts**: All packages are pinned to stable, compatible versions
- **No Experimental Features**: Uses proven, widely-supported technologies
- **Easy Cloning**: Works out of the box with minimal setup
- **Beginner-Proof**: Clear documentation and structure
- **Professional Quality**: Follows software engineering best practices

## System Requirements

- Node.js 18.x (LTS)
- npm 9.x or later

## Installation Guide

Follow these steps to set up your new project:

```bash
# Clone the repository (replace <REPO_URL> with actual URL)
git clone <REPO_URL> ui

# Navigate to the project directory
cd my-project

# Remove the git history to start fresh
rm -rf .git

# Install dependencies
npm install

# Start the development server
npm run dev
```

**Why `rm -rf .git`?** This removes the starter's git history, allowing you to initialize a fresh repository for your own project.

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Troubleshooting

If installation fails:

1. Delete `node_modules` directory
2. Delete `package-lock.json`
3. Run `npm install` again

**Important Notes:**
- Do not mix npm with yarn or pnpm
- Ensure you have the correct Node.js version (18.x)
- Check that npm is updated to version 9.x or later

## Design Philosophy

### Version Stability
All package versions are pinned to specific, stable releases to prevent unexpected breaking changes. This ensures the starter remains reliable over time.

### No ESLint Included
ESLint is excluded to avoid configuration complexity for beginners. You can add it later when your project matures.

### Stability Over Features
This starter prioritizes compatibility and reliability over cutting-edge features. It's built with proven technologies that work consistently across different environments.

## Project Structure

```
react-stable-starter/
├─ src/
│  ├─ components/
│  │  └─ ExampleButton.jsx    # Reusable button component
│  ├─ pages/
│  │  └─ Home.jsx             # Home page component
│  ├─ layouts/
│  │  └─ MainLayout.jsx       # Main layout wrapper
│  ├─ styles/
│  │  └─ index.css            # Global styles with Tailwind
│  ├─ App.jsx                 # Main app component
│  └─ main.jsx                # Entry point
├─ public/                    # Static assets
├─ .env.example               # Environment variables template
├─ .gitignore                 # Git ignore rules
├─ .nvmrc                     # Node version specification
├─ package.json               # Dependencies and scripts
├─ requirements.txt           # System requirements
├─ tailwind.config.js         # Tailwind configuration
├─ postcss.config.js          # PostCSS configuration
├─ vite.config.js             # Vite configuration
└─ index.html                 # HTML template
```

## Environment Variables

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

Available variables:
- `VITE_APP_NAME`: Your application name
- `VITE_API_BASE_URL`: API base URL for development

## Getting Started with Development

1. **Add New Pages**: Create components in `src/pages/` and add routes in `src/App.jsx`
2. **Create Components**: Use `src/components/` for reusable UI elements
3. **Styling**: Combine Tailwind utilities with Bootstrap classes as needed
4. **API Calls**: Use Axios for HTTP requests (already included)

## Contributing

This is a starter template. Feel free to fork and customize for your needs.

## License

ISC
