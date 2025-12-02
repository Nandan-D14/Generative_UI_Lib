# Installation Guide

Complete guide to installing and using the React UI Component Library.

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Project Setup](#project-setup)
- [Installing Components](#installing-components)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Troubleshooting](#troubleshooting)

## 🚀 Quick Start

### Option 1: Clone the Entire Project

```bash
# Clone the repository
git clone <your-repo-url>
cd react-ui-component-library

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the component library.

### Option 2: Copy Individual Components

1. Browse to `/components` in the running app
2. Find the component you want
3. Click on it to see the code
4. Copy the component code
5. Paste into your project

## 🏗️ Project Setup

### Prerequisites

- Node.js 16 or higher
- npm or yarn
- React 18+ project

### Create a New React Project (Optional)

If starting from scratch:

```bash
# Using Vite (recommended)
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install

# Using Create React App
npx create-react-app my-app --template typescript
cd my-app
```

## 📦 Installing Components

### Step 1: Install Required Dependencies

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

### Step 2: Setup Tailwind CSS

If you don't have Tailwind CSS installed:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#030303',
        surface: '#0a0a0a',
        primary: {
          DEFAULT: '#8b5cf6',
          dark: '#7c3aed',
          light: '#a78bfa',
        },
        secondary: '#a1a1aa',
        border: '#27272a',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}
```

Add Tailwind directives to your CSS file (`src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #030303;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
}
```

### Step 3: Create Utility Functions

Create `src/utils/cn.ts`:

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Step 4: Copy Components

Create a `components` folder in your project:

```
src/
  components/
    lib/
      Button.tsx
      Input.tsx
      Card.tsx
      ... (other components)
```

Copy the component code from the library into these files.

## 📚 Dependencies

### Core Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "framer-motion": "^12.23.25",
  "lucide-react": "^0.555.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.4.0"
}
```

### Dev Dependencies

```json
{
  "typescript": "~5.8.2",
  "vite": "^6.2.0",
  "@vitejs/plugin-react": "^5.0.0",
  "tailwindcss": "^3.4.0",
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0"
}
```

### What Each Dependency Does

- **framer-motion**: Smooth animations and transitions
- **lucide-react**: Beautiful icon library
- **clsx**: Conditional className utility
- **tailwind-merge**: Merge Tailwind classes without conflicts
- **tailwindcss**: Utility-first CSS framework

## ⚙️ Configuration

### TypeScript Configuration

Ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Vite Configuration

Create or update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

## 💡 Usage Examples

### Basic Button Usage

```tsx
import { Button } from './components/lib/Button';

function App() {
  return (
    <div className="p-8">
      <Button onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}
```

### Form with Input and Button

```tsx
import { useState } from 'react';
import { Input } from './components/lib/Input';
import { Button } from './components/lib/Button';
import { Mail } from 'lucide-react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<Mail className="h-4 w-4" />}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
}
```

### Card with Content

```tsx
import { Card, CardHeader, CardTitle, CardContent } from './components/lib/Card';
import { Button } from './components/lib/Button';

function ProductCard() {
  return (
    <Card hover>
      <CardHeader>
        <CardTitle>Premium Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-secondary mb-4">
          Get access to all features
        </p>
        <Button variant="default">
          Subscribe
        </Button>
      </CardContent>
    </Card>
  );
}
```

### Animated Text

```tsx
import { SplitText } from './components/lib/SplitText';
import { TypewriterText } from './components/lib/TypewriterText';

function Hero() {
  return (
    <div className="text-center py-20">
      <SplitText 
        text="Welcome to Our App" 
        className="text-6xl font-bold text-white mb-4"
        delay={0.05}
      />
      <TypewriterText 
        text="Build amazing interfaces with ease"
        className="text-xl text-secondary"
        speed={50}
      />
    </div>
  );
}
```

## 🔧 Troubleshooting

### Components Not Rendering

**Problem**: Components appear but have no styling.

**Solution**: Make sure Tailwind CSS is properly configured and the directives are in your CSS file.

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### TypeScript Errors

**Problem**: TypeScript shows errors for component props.

**Solution**: Ensure all dependencies are installed and TypeScript is configured correctly.

```bash
npm install --save-dev @types/react @types/react-dom
```

### Animations Not Working

**Problem**: Framer Motion animations don't work.

**Solution**: Check that framer-motion is installed:

```bash
npm install framer-motion
```

### Icons Not Showing

**Problem**: Lucide icons don't appear.

**Solution**: Install lucide-react:

```bash
npm install lucide-react
```

### Build Errors

**Problem**: Build fails with module errors.

**Solution**: Clear cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Dark Background Not Showing

**Problem**: Background is white instead of dark.

**Solution**: Add the dark class to your HTML and set body background:

```html
<html class="dark">
```

```css
body {
  background-color: #030303;
  color: #ffffff;
}
```

## 📱 Responsive Design

All components are responsive by default. Use Tailwind's responsive prefixes:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</div>
```

## 🎨 Customization

### Changing Colors

Update your `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#your-color',
        dark: '#your-dark-color',
      },
    },
  },
}
```

### Custom Variants

Extend components with your own variants:

```tsx
<Button className="bg-gradient-to-r from-blue-500 to-purple-500">
  Custom Gradient
</Button>
```

## 🚀 Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Next Steps

1. Browse the component library at `/components`
2. Read the component documentation
3. Check out the examples
4. Start building your app!

## 🆘 Getting Help

- Check the component documentation
- Review the code examples
- Look at the source code
- Read the troubleshooting section

## 📄 License

Open source and free to use in your projects.
