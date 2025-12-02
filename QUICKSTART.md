# Quick Start

Get up and running with the Premium UI Component Library in minutes!

## 1. Install Dependencies

```bash
npm install framer-motion lucide-react tailwind-merge clsx
```

## 2. Create Helper

`utils/cn.ts`:
```ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## 3. Copy a Component

Example: **Button**

`components/Button.tsx`:
```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

// ... copy full code from documentation ...
```

## 4. Use It

```tsx
import { Button } from './components/Button';

export default function Page() {
  return <Button>Get Started</Button>;
}
```

You now have everything you need to start building beautiful interfaces with the Premium UI Component Library. Happy coding! 🚀