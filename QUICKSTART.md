# Quick Start Guide

Get up and running with the React UI Component Library in minutes!

## 🚀 Installation

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Steps

1. **Clone or download the project**
   ```bash
   cd your-project-directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

That's it! You should see the component library running.

## 📦 Using Components

### Method 1: Copy & Paste (Recommended)

1. Browse to `/components` in the running app
2. Find the component you want
3. Click on it to see the details
4. Copy the component code
5. Paste it into your project

### Method 2: Import from Library

```tsx
import { Button } from './components/lib/Button';
import { Card } from './components/lib/Card';

function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

## 🎨 Basic Examples

### Button Component

```tsx
import { Button } from './components/lib/Button';

// Default button
<Button>Click me</Button>

// With variant
<Button variant="outline">Outline</Button>

// With loading state
<Button isLoading>Loading...</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Card Component

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from './components/lib/Card';

<Card hover>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
</Card>
```

### Input Component

```tsx
import { Input } from './components/lib/Input';
import { Mail } from 'lucide-react';

<Input 
  label="Email"
  type="email"
  placeholder="Enter your email"
  icon={<Mail className="h-4 w-4" />}
/>
```

### Modal Component

```tsx
import { Modal } from './components/lib/Modal';
import { Button } from './components/lib/Button';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="My Modal"
      >
        <p>Modal content goes here</p>
      </Modal>
    </>
  );
}
```

### Tabs Component

```tsx
import { Tabs } from './components/lib/Tabs';

const tabs = [
  { 
    id: 'overview', 
    label: 'Overview', 
    content: <div>Overview content</div> 
  },
  { 
    id: 'details', 
    label: 'Details', 
    content: <div>Details content</div> 
  },
];

<Tabs tabs={tabs} defaultTab="overview" />
```

### Animated Components

```tsx
import { SplitText } from './components/lib/SplitText';
import { TypewriterText } from './components/lib/TypewriterText';
import { ShimmerButton } from './components/lib/ShimmerButton';

// Split text animation
<SplitText 
  text="Hello World" 
  className="text-4xl font-bold"
  delay={0.1}
/>

// Typewriter effect
<TypewriterText 
  text="I'm typing..." 
  speed={50}
/>

// Shimmer button
<ShimmerButton>
  Click me!
</ShimmerButton>
```

## 🎨 Customization

### Using Tailwind Classes

All components accept a `className` prop:

```tsx
<Button className="bg-blue-500 hover:bg-blue-600">
  Custom Button
</Button>

<Card className="max-w-md mx-auto">
  Custom Card
</Card>
```

### Combining Components

```tsx
<Card hover className="max-w-2xl">
  <CardHeader>
    <CardTitle>Sign Up</CardTitle>
    <CardDescription>Create your account</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <Input 
      label="Name" 
      placeholder="John Doe" 
    />
    <Input 
      label="Email" 
      type="email"
      placeholder="john@example.com" 
    />
    <Button className="w-full">
      Create Account
    </Button>
  </CardContent>
</Card>
```

## 🎯 Common Patterns

### Form with Validation

```tsx
import { Input } from './components/lib/Input';
import { Button } from './components/lib/Button';
import { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Invalid email');
      return;
    }
    // Submit form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Loading State

```tsx
import { Button } from './components/lib/Button';
import { Progress } from './components/lib/Progress';
import { useState } from 'react';

function LoadingExample() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = async () => {
    setLoading(true);
    // Simulate loading
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise(r => setTimeout(r, 200));
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <Button isLoading={loading} onClick={handleClick}>
        Start Process
      </Button>
      {loading && (
        <Progress value={progress} showLabel />
      )}
    </div>
  );
}
```

### Interactive Cards

```tsx
import { GlowingCard } from './components/lib/GlowingCard';
import { Badge } from './components/lib/Badge';

<div className="grid grid-cols-3 gap-4">
  <GlowingCard glowColor="#8b5cf6">
    <Badge variant="default">New</Badge>
    <h3 className="text-xl font-bold mt-2">Feature 1</h3>
    <p className="text-secondary mt-2">Description</p>
  </GlowingCard>
  
  <GlowingCard glowColor="#3b82f6">
    <Badge variant="success">Active</Badge>
    <h3 className="text-xl font-bold mt-2">Feature 2</h3>
    <p className="text-secondary mt-2">Description</p>
  </GlowingCard>
  
  <GlowingCard glowColor="#ec4899">
    <Badge variant="warning">Beta</Badge>
    <h3 className="text-xl font-bold mt-2">Feature 3</h3>
    <p className="text-secondary mt-2">Description</p>
  </GlowingCard>
</div>
```

## 🎨 Theming

### Custom Colors

Edit `index.html` to customize the color scheme:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        // ... other colors
      }
    }
  }
}
```

### Dark Mode

The library is dark mode first, but you can customize:

```tsx
<div className="bg-background text-white">
  {/* Your components */}
</div>
```

## 📱 Responsive Design

All components are responsive by default. Use Tailwind's responsive classes:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</div>
```

## 🔍 Finding Components

### Browse the Library
1. Go to `/components` in your browser
2. Use the search bar to find components
3. Click on categories to expand/collapse
4. Click on a component to see details

### Component Categories
- **UI Components**: Buttons, Inputs, Cards, etc.
- **Text Animations**: Split Text, Typewriter
- **3D & Interactive**: Tilted Card, Glowing Card, etc.

## 🐛 Troubleshooting

### Components not showing?
- Make sure you've installed dependencies: `npm install`
- Check that the dev server is running: `npm run dev`
- Verify imports are correct

### Styles not working?
- Tailwind CSS is loaded via CDN in `index.html`
- Make sure you're using valid Tailwind classes
- Check browser console for errors

### TypeScript errors?
- This project uses CDN imports, some TS errors are expected
- The code will still run correctly
- Use `// @ts-ignore` if needed

## 📚 Next Steps

1. **Explore Components**: Browse `/components` to see all available components
2. **Read Documentation**: Check out the other markdown files
3. **Build Something**: Start creating with the components
4. **Customize**: Make the components your own with Tailwind classes
5. **Share**: Show off what you've built!

## 🎓 Learning Resources

- **Component Examples**: See live examples at `/components`
- **Source Code**: Check `components/lib/` for implementation
- **Documentation**: Read `COMPONENTS.md` for detailed reference
- **Best Practices**: See `IMPROVEMENTS.md` for patterns

## 💡 Tips

1. **Start Simple**: Begin with basic components like Button and Card
2. **Combine Components**: Build complex UIs by composing simple components
3. **Use TypeScript**: Take advantage of type safety
4. **Customize Freely**: All components accept className prop
5. **Check Examples**: Look at the live examples for inspiration

## 🎉 You're Ready!

You now have everything you need to start building beautiful interfaces with the React UI Component Library. Happy coding! 🚀

---

**Need Help?**
- Check the live examples at `/components`
- Read the documentation files
- Review the source code
- Experiment and have fun!
