# Premium UI Component Library - Project Summary

## 1. Core Identity
*   **Name:** Premium UI Component Library
*   **Purpose:** A collection of "copy-paste" animated React components.
*   **Tech Stack:** React, Tailwind CSS, Framer Motion, Lucide React, React Router DOM.
*   **Design Language:** Modern, Dark Mode, "Premium/Luxury" aesthetic (Gradients, Glassmorphism, Glows).

## 2. Project Structure
*   **`components/lib/`**: The core library. Each file is a standalone component (e.g., `Button.tsx`, `SpotlightCard.tsx`).
*   **`components/layout/`**: Layout components for the documentation site (`Header.tsx`, `Sidebar.tsx`, `Footer.tsx`).
*   **`components/landing/`**: Components specific to the landing page (`Hero.tsx`, `FeatureGrid.tsx`, `ComponentPreview.tsx`).
*   **`pages/`**: Route pages (`Home.tsx`, `ComponentDetail.tsx`, `Docs.tsx`).
*   **`data/registry.ts`**: The "database" of components. Maps slugs to component imports, metadata, and code strings.
*   **`App.tsx`**: Main router configuration and layout wrapper.
*   **`index.html`**: Tailwind configuration (CDN for now) and global styles.

## 3. Key Components
### UI Elements
*   **Button**: Variants (default, outline, ghost), sizes, loading state.
*   **Card**: Basic container with hover effects.
*   **Input**: Styled form inputs.
*   **Badge**: Status indicators.
*   **Tooltip**: Hover tooltips.
*   **Modal**: Accessible dialogs with AnimatePresence.
*   **Tabs**: Animated tab switching.
*   **Accordion**: Collapsible content.
*   **Progress**: Animated progress bars.

### Visual Effects (The "Premium" Factor)
*   **SpotlightCard**: Mouse-following radial gradient.
*   **GlowingCard**: Border glow on hover.
*   **TiltedCard**: 3D tilt effect on mouse move.
*   **ParallaxCard**: Depth effect.
*   **AnimatedGradient**: Moving background gradients.
*   **ShimmerButton**: Shiny reflection animation.
*   **GlassCard**: Frosted glass effect with noise.
*   **StarBorder**: Rotating gradient border.

### Text Animations
*   **SplitText**: Staggered character/word entry.
*   **TypewriterText**: Typing effect with cursor.
*   **DecryptedText**: Matrix-style character shuffle reveal.
*   **GradientText**: Text with flowing gradient background.

### Complex Templates
*   **ModernSaaS**: A full landing page template (Hero, Features, Pricing, FAQ).
*   **GandomDashboard**: A data-rich dashboard with charts (Recharts) and activity feeds.
*   **SaaspoLanding**: A high-contrast, vibrant landing page.

## 4. Documentation System (`ComponentDetail.tsx`)
*   **Dynamic Routing**: `/components/:slug` loads data from `registry.ts`.
*   **Interactive Preview**:
    *   Renders the actual component.
    *   **Controls Panel**: Auto-generated inputs (text, number, color, select) based on the component's prop types to modify the preview in real-time.
*   **Code View**: Displays the source code using `react-syntax-highlighter` (Atom Dark theme).
*   **Template Handling**: Special rendering for templates (full width/height) and a "View Full Template" button that opens in a new tab/route.

## 5. Recent Improvements
*   **Theme Overhaul**: Switched to a high-contrast Black/Dark Grey/Pink/Orange palette.
*   **Navigation**: Added "View Full Template" for complex components.
*   **Preview Engine**: Robust interactive playground with controls.
*   **New Components**: Added Dock, StarBorder, GlassCard, DecryptedText, GradientText.
*   **Templates**: Added Gandom Dashboard and Saaspo Landing.

## 6. Future Roadmap (Implied)
*   Migrate Tailwind from CDN to PostCSS build process for better performance.
*   Add more templates (E-commerce, Portfolio).
*   Add CLI tool for installation (e.g., `npx premium-ui add button`).