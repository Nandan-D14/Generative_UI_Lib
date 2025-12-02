# Component Library Reference

A quick reference guide for all available components in the library.

## 📦 Component Categories

### 🎨 UI Components (9)

Essential building blocks for modern interfaces.

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **Button** | Versatile button with variants | 6 variants, loading states, sizes |
| **Input** | Styled input field | Labels, icons, error states |
| **Badge** | Status indicator | 6 color variants, small footprint |
| **Card** | Flexible container | Header, content, footer sections |
| **Tabs** | Tab navigation | Animated indicator, icon support |
| **Accordion** | Collapsible sections | Single/multiple open modes |
| **Modal** | Dialog overlay | 4 sizes, backdrop blur |
| **Tooltip** | Hover information | 4 positions, smooth animations |
| **Progress** | Progress indicator | 4 color variants, percentage label |

### ✨ Text Animations (2)

Bring your text to life with smooth animations.

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **Split Text** | Word-by-word reveal | Customizable delay, smooth entrance |
| **Typewriter Text** | Typing effect | Adjustable speed, cursor option |

### 🎭 3D & Interactive (5)

Advanced components with interactive effects.

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **Tilted Card** | 3D tilt on hover | Mouse-following rotation |
| **Spotlight Card** | Radial gradient spotlight | Mouse-tracking effect |
| **Glowing Card** | Animated glow | Customizable glow color |
| **Parallax Card** | 3D parallax effect | Depth-based movement |
| **Shimmer Button** | Shimmer animation | Continuous flowing effect |
| **Animated Gradient** | Flowing gradients | Multi-color transitions |

## 🎨 Design Tokens

### Colors

```javascript
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
  accent: {
    blue: '#3b82f6',
    purple: '#a855f7',
    pink: '#ec4899',
    green: '#10b981',
    amber: '#f59e0b',
  }
}
```

### Typography

- **Font Family**: Inter (sans-serif), Fira Code (monospace)
- **Sizes**: Responsive scale from text-sm to text-8xl
- **Weights**: 300 (light) to 700 (bold)

### Spacing

- Consistent 4px base unit
- Responsive padding and margins
- Proper component spacing

## 🚀 Quick Start Examples

### Button Variants

```tsx
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost">Ghost</Button>
<Button isLoading>Loading</Button>
```

### Card with Content

```tsx
<Card hover>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Tabs Navigation

```tsx
const tabs = [
  { id: '1', label: 'Tab 1', content: <div>Content 1</div> },
  { id: '2', label: 'Tab 2', content: <div>Content 2</div> },
];

<Tabs tabs={tabs} defaultTab="1" />
```

### Modal Dialog

```tsx
const [isOpen, setIsOpen] = useState(false);

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"
>
  <p>Modal content goes here</p>
</Modal>
```

## 🎯 Best Practices

### Performance
- Use `React.memo()` for expensive components
- Lazy load components when possible
- Optimize animations for 60fps

### Accessibility
- Always provide ARIA labels
- Ensure keyboard navigation works
- Test with screen readers
- Maintain proper color contrast

### Customization
- Use Tailwind's `className` prop for styling
- Extend components with composition
- Override default props as needed

### Responsive Design
- Test on mobile, tablet, and desktop
- Use responsive Tailwind classes
- Consider touch targets (min 44x44px)

## 📚 Resources

- **Documentation**: Browse `/components` for live examples
- **Source Code**: Each component includes full source code
- **Props Reference**: Detailed prop documentation available
- **TypeScript**: Full type definitions included

## 🤝 Contributing

Want to add a component? Follow these steps:

1. Create component in `components/lib/`
2. Add to `data/registry.ts`
3. Include props documentation
4. Add usage examples
5. Test thoroughly

## 📄 License

Open source and free to use in your projects.
