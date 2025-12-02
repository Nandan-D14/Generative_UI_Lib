# Installation Guide

Complete guide to installing and using the Premium UI Component Library.

## Prerequisites

*   Node.js 16+
*   React 18+
*   Tailwind CSS

## Manual Installation

Since this is a copy-paste library, you don't install it via npm. Instead, you copy the component files into your project.

1.  **Install Dependencies**:
    Ensure you have the necessary libraries installed in your project:
    ```bash
    npm install framer-motion lucide-react tailwind-merge clsx
    ```

2.  **Setup Utility**:
    Create a `utils/cn.ts` file for class merging:
    ```ts
    import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";

    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }
    ```

3.  **Copy Components**:
    Navigate to the component you want in our documentation, copy the code, and paste it into your `components` folder.

4.  **Usage**:
    Import and use the component in your application:
    ```tsx
    import { Button } from './components/Button';

    export default function App() {
      return <Button>Hello World</Button>;
    }
    ```