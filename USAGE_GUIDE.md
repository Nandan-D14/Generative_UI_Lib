# Component Usage Guide

Comprehensive guide with examples for every component in the library.

## 📋 Table of Contents

- [UI Components](#ui-components)
- [Text Animations](#text-animations)
- [3D & Interactive](#3d--interactive)
- [Common Patterns](#common-patterns)
- [Best Practices](#best-practices)

---

## 🎨 UI Components

### Button

Professional button with multiple variants and states.

```tsx
import { Button } from './components/lib/Button';

// All variants
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔥</Button>

// States
<Button isLoading>Loading...</Button>
<Button disabled>Disabled</Button>

// With onClick
<Button onClick={() => console.log('Clicked')}>
  Click Me
</Button>

// In forms
<form onSubmit={handleSubmit}>
  <Button type="submit">Submit</Button>
</form>
```

**Common Use Cases:**
- Form submissions
- Call-to-action buttons
- Navigation actions
- Modal confirmations

---

### Input

Styled input field with labels, icons, and error handling.

```tsx
import { Input } from './components/lib/Input';
import { Mail, Lock, User, Search } from 'lucide-react';
import { useState } from 'react';

function FormExample() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="space-y-4">
      {/* Basic input */}
      <Input 
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* With icon */}
      <Input 
        label="Email"
        icon={<Mail className="h-4 w-4" />}
        placeholder="you@example.com"
      />

      {/* With error */}
      <Input 
        label="Username"
        error="Username is already taken"
        icon={<User className="h-4 w-4" />}
      />

      {/* Password */}
      <Input 
        label="Password"
        type="password"
        icon={<Lock className="h-4 w-4" />}
      />

      {/* Search */}
      <Input 
        placeholder="Search..."
        icon={<Search className="h-4 w-4" />}
      />
    </div>
  );
}
```

**Common Use Cases:**
- Login/signup forms
- Search bars
- Settings forms
- Data entry

---

### Badge

Small status indicators with color variants.

```tsx
import { Badge } from './components/lib/Badge';

// All variants
<Badge variant="default">New</Badge>
<Badge variant="secondary">Draft</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>

// In context
<div className="flex items-center gap-2">
  <h3>Project Status</h3>
  <Badge variant="success">Active</Badge>
</div>

// Multiple badges
<div className="flex gap-2">
  <Badge>React</Badge>
  <Badge>TypeScript</Badge>
  <Badge>Tailwind</Badge>
</div>
```

**Common Use Cases:**
- Status indicators
- Tags and labels
- Notification counts
- Feature flags

---

### Card

Flexible card container with modular sections.

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from './components/lib/Card';
import { Button } from './components/lib/Button';

// Basic card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
</Card>

// With hover effect
<Card hover>
  <CardHeader>
    <CardTitle>Hover Me</CardTitle>
  </CardHeader>
  <CardContent>
    <p>I lift up on hover</p>
  </CardContent>
</Card>

// Complete example
<Card hover className="max-w-md">
  <CardHeader>
    <CardTitle>Premium Plan</CardTitle>
    <CardDescription>
      Everything you need to get started
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="text-4xl font-bold mb-4">$29/mo</div>
    <ul className="space-y-2 text-secondary">
      <li>✓ Unlimited projects</li>
      <li>✓ Priority support</li>
      <li>✓ Advanced analytics</li>
    </ul>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Subscribe</Button>
  </CardFooter>
</Card>
```

**Common Use Cases:**
- Product cards
- Pricing plans
- User profiles
- Content previews

---

### Tabs

Animated tab navigation with smooth transitions.

```tsx
import { Tabs } from './components/lib/Tabs';
import { Home, Settings, User } from 'lucide-react';

function TabsExample() {
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Home className="h-4 w-4" />,
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">Overview</h3>
          <p className="text-secondary">Dashboard overview content</p>
        </div>
      ),
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="h-4 w-4" />,
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">Settings</h3>
          <p className="text-secondary">Settings content</p>
        </div>
      ),
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <User className="h-4 w-4" />,
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">Profile</h3>
          <p className="text-secondary">Profile content</p>
        </div>
      ),
    },
  ];

  return <Tabs tabs={tabs} defaultTab="overview" />;
}
```

**Common Use Cases:**
- Settings pages
- Dashboard sections
- Product details
- Documentation

---

### Accordion

Collapsible content sections.

```tsx
import { Accordion } from './components/lib/Accordion';

function AccordionExample() {
  const items = [
    {
      id: '1',
      title: 'What is this component library?',
      content: 'A collection of production-ready React components built with Tailwind CSS and Framer Motion.',
    },
    {
      id: '2',
      title: 'How do I install it?',
      content: 'Copy the components you need into your project and install the required dependencies.',
    },
    {
      id: '3',
      title: 'Is it free to use?',
      content: 'Yes! This library is open source and free to use in your projects.',
    },
  ];

  return (
    <div>
      {/* Single item open at a time */}
      <Accordion items={items} />

      {/* Multiple items can be open */}
      <Accordion items={items} allowMultiple />
    </div>
  );
}
```

**Common Use Cases:**
- FAQ sections
- Settings panels
- Documentation
- Product features

---

### Modal

Dialog overlay with backdrop blur.

```tsx
import { Modal } from './components/lib/Modal';
import { Button } from './components/lib/Button';
import { useState } from 'react';

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
        size="md"
      >
        <p className="text-secondary mb-4">
          Are you sure you want to proceed?
        </p>
        <div className="flex gap-2 justify-end">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive">
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
}

// Different sizes
<Modal size="sm">Small modal</Modal>
<Modal size="md">Medium modal</Modal>
<Modal size="lg">Large modal</Modal>
<Modal size="xl">Extra large modal</Modal>
```

**Common Use Cases:**
- Confirmations
- Forms
- Image previews
- Alerts

---

### Tooltip

Hover tooltips with positioning.

```tsx
import { Tooltip } from './components/lib/Tooltip';
import { Button } from './components/lib/Button';
import { Info } from 'lucide-react';

// Basic tooltip
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>

// Different positions
<Tooltip content="Top tooltip" position="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" position="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" position="left">
  <Button>Left</Button>
</Tooltip>

<Tooltip content="Right tooltip" position="right">
  <Button>Right</Button>
</Tooltip>

// With icon
<Tooltip content="Additional information">
  <Info className="h-4 w-4 text-secondary cursor-help" />
</Tooltip>
```

**Common Use Cases:**
- Help text
- Additional info
- Icon explanations
- Feature descriptions

---

### Progress

Animated progress bars.

```tsx
import { Progress } from './components/lib/Progress';
import { useState, useEffect } from 'react';

function ProgressExample() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-4">
      {/* Basic progress */}
      <Progress value={75} />

      {/* With label */}
      <Progress value={progress} showLabel />

      {/* Different variants */}
      <Progress value={100} variant="success" showLabel />
      <Progress value={50} variant="warning" showLabel />
      <Progress value={25} variant="danger" showLabel />

      {/* Custom max value */}
      <Progress value={50} max={200} showLabel />
    </div>
  );
}
```

**Common Use Cases:**
- Upload progress
- Loading states
- Completion tracking
- Skill levels

---

## ✨ Text Animations

### Split Text

Word-by-word text reveal animation.

```tsx
import { SplitText } from './components/lib/SplitText';

// Basic usage
<SplitText 
  text="Welcome to our website" 
  className="text-4xl font-bold text-white"
/>

// Custom delay
<SplitText 
  text="Slower animation" 
  delay={0.1}
  className="text-2xl"
/>

// Fast animation
<SplitText 
  text="Quick reveal" 
  delay={0.03}
  className="text-xl"
/>

// Hero section
<div className="text-center py-20">
  <SplitText 
    text="Build Amazing Interfaces" 
    className="text-6xl font-bold text-white mb-4"
    delay={0.05}
  />
  <p className="text-xl text-secondary">
    With our component library
  </p>
</div>
```

**Common Use Cases:**
- Hero sections
- Page titles
- Announcements
- Landing pages

---

### Typewriter Text

Character-by-character typing effect.

```tsx
import { TypewriterText } from './components/lib/TypewriterText';

// Basic usage
<TypewriterText 
  text="Hello, I'm a typewriter effect!" 
  className="text-2xl font-bold"
/>

// Custom speed
<TypewriterText 
  text="Typing slowly..." 
  speed={100}
/>

<TypewriterText 
  text="Typing fast!" 
  speed={30}
/>

// Without cursor
<TypewriterText 
  text="No cursor here" 
  cursor={false}
/>

// With callback
<TypewriterText 
  text="Animation complete!" 
  onComplete={() => console.log('Done!')}
/>
```

**Common Use Cases:**
- Chat interfaces
- Terminal effects
- Storytelling
- Interactive demos

---

## 🎭 3D & Interactive

### Tilted Card

3D tilt effect on mouse movement.

```tsx
import { TiltedCard } from './components/lib/TiltedCard';

// Basic usage
<div className="h-[300px] w-[300px]">
  <TiltedCard className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl p-6">
    <h3 className="text-2xl font-bold text-white">3D Card</h3>
    <p className="text-white/80 mt-2">Hover to tilt</p>
  </TiltedCard>
</div>

// Custom rotation
<TiltedCard rotateAmplitude={20}>
  <div>More rotation</div>
</TiltedCard>

// Custom scale
<TiltedCard scaleOnHover={1.1}>
  <div>Bigger on hover</div>
</TiltedCard>
```

**Common Use Cases:**
- Product showcases
- Feature cards
- Portfolio items
- Interactive demos

---

### Spotlight Card

Mouse-following spotlight effect.

```tsx
import { SpotlightCard } from './components/lib/SpotlightCard';

// Basic usage
<SpotlightCard className="p-8">
  <h3 className="text-xl font-bold text-white">Spotlight Card</h3>
  <p className="text-secondary mt-2">Move your mouse over me</p>
</SpotlightCard>

// Custom spotlight color
<SpotlightCard 
  spotlightColor="rgba(139, 92, 246, 0.3)"
  className="p-8"
>
  <div>Purple spotlight</div>
</SpotlightCard>
```

**Common Use Cases:**
- Feature highlights
- Interactive cards
- Product cards
- Call-to-action sections

---

### Glowing Card

Animated glow effect on hover.

```tsx
import { GlowingCard } from './components/lib/GlowingCard';

// Basic usage
<GlowingCard>
  <h3 className="text-xl font-bold text-white">Glowing Card</h3>
  <p className="text-secondary mt-2">Hover to see the glow</p>
</GlowingCard>

// Custom glow color
<GlowingCard glowColor="#3b82f6">
  <div>Blue glow</div>
</GlowingCard>

<GlowingCard glowColor="#ec4899">
  <div>Pink glow</div>
</GlowingCard>
```

**Common Use Cases:**
- Premium features
- Highlighted content
- Interactive elements
- Call-to-action cards

---

### Parallax Card

3D parallax effect based on mouse movement.

```tsx
import { ParallaxCard } from './components/lib/ParallaxCard';

// Basic usage
<ParallaxCard>
  <h3 className="text-xl font-bold text-white">Parallax Card</h3>
  <p className="text-secondary mt-2">Move your mouse</p>
</ParallaxCard>

// Custom intensity
<ParallaxCard intensity={30}>
  <div>More parallax</div>
</ParallaxCard>

<ParallaxCard intensity={10}>
  <div>Subtle parallax</div>
</ParallaxCard>
```

**Common Use Cases:**
- Hero sections
- Feature showcases
- Interactive galleries
- Product displays

---

### Shimmer Button

Button with animated shimmer effect.

```tsx
import { ShimmerButton } from './components/lib/ShimmerButton';

// Basic usage
<ShimmerButton>
  Click Me
</ShimmerButton>

// Custom shimmer color
<ShimmerButton shimmerColor="rgba(255, 255, 255, 0.5)">
  Brighter shimmer
</ShimmerButton>

// As CTA
<ShimmerButton className="px-8 py-4 text-lg">
  Get Started Now
</ShimmerButton>
```

**Common Use Cases:**
- Call-to-action buttons
- Premium features
- Special offers
- Hero sections

---

### Animated Gradient

Flowing gradient background animation.

```tsx
import { AnimatedGradient } from './components/lib/AnimatedGradient';

// Basic usage
<AnimatedGradient className="p-8 rounded-xl">
  <h3 className="text-2xl font-bold text-white">Animated Gradient</h3>
  <p className="text-white/80 mt-2">Watch the colors flow</p>
</AnimatedGradient>

// Custom colors
<AnimatedGradient 
  colors={['#ff0080', '#7928ca', '#ff0080']}
  className="p-8 rounded-xl"
>
  <div>Custom gradient</div>
</AnimatedGradient>
```

**Common Use Cases:**
- Hero backgrounds
- Feature sections
- Premium content
- Decorative elements

---

## 🎯 Common Patterns

### Login Form

```tsx
import { Input } from './components/lib/Input';
import { Button } from './components/lib/Button';
import { Card, CardHeader, CardTitle, CardContent } from './components/lib/Card';
import { Mail, Lock } from 'lucide-react';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Handle login
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail className="h-4 w-4" />}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="h-4 w-4" />}
            required
          />
          <Button type="submit" className="w-full" isLoading={loading}>
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

### Pricing Cards

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './components/lib/Card';
import { Button } from './components/lib/Button';
import { Badge } from './components/lib/Badge';
import { GlowingCard } from './components/lib/GlowingCard';

function PricingCards() {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      features: ['10 projects', 'Basic support', '1GB storage'],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      features: ['Unlimited projects', 'Priority support', '10GB storage'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      features: ['Everything in Pro', 'Dedicated support', 'Unlimited storage'],
      popular: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => {
        const CardComponent = plan.popular ? GlowingCard : Card;
        
        return (
          <CardComponent key={plan.name} hover>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle>{plan.name}</CardTitle>
                {plan.popular && <Badge variant="default">Popular</Badge>}
              </div>
              <div className="text-4xl font-bold text-white">{plan.price}</div>
              <p className="text-secondary">per month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-secondary">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant={plan.popular ? 'default' : 'outline'} 
                className="w-full"
              >
                Choose Plan
              </Button>
            </CardFooter>
          </CardComponent>
        );
      })}
    </div>
  );
}
```

---

## 💡 Best Practices

### 1. Consistent Spacing

Use Tailwind's spacing scale consistently:

```tsx
<div className="space-y-4">  {/* Vertical spacing */}
  <Input label="Name" />
  <Input label="Email" />
  <Button>Submit</Button>
</div>

<div className="flex gap-4">  {/* Horizontal spacing */}
  <Button>Cancel</Button>
  <Button>Confirm</Button>
</div>
```

### 2. Responsive Design

Always consider mobile:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</div>
```

### 3. Loading States

Always show loading feedback:

```tsx
<Button isLoading={loading} onClick={handleSubmit}>
  {loading ? 'Submitting...' : 'Submit'}
</Button>
```

### 4. Error Handling

Show clear error messages:

```tsx
<Input
  label="Email"
  error={error}
  value={email}
  onChange={(e) => {
    setEmail(e.target.value);
    setError(''); // Clear error on change
  }}
/>
```

### 5. Accessibility

Use semantic HTML and ARIA labels:

```tsx
<Button aria-label="Close modal" onClick={onClose}>
  <X className="h-4 w-4" />
</Button>
```

---

## 🎓 Learn More

- Check the [Installation Guide](INSTALLATION.md) for setup
- Read the [Component Reference](COMPONENTS.md) for details
- Browse the live examples at `/components`
- Review the source code for advanced usage

Happy building! 🚀
