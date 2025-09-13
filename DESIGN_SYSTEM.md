# 🎨 Snapchat-Inspired Design System Template

A comprehensive design system built with **Expo Router**, **NativeWind**, and **Tailwind CSS** featuring Snapchat's signature yellow branding and modern mobile-first design patterns.

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Installation & Setup](#-installation--setup)
- [Design Tokens](#-design-tokens)
- [Components](#-components)
- [Usage Examples](#-usage-examples)
- [Best Practices](#-best-practices)
- [Project Structure](#-project-structure)
- [Customization](#-customization)

## 🚀 Quick Start

```bash
# Create new Expo project
npx create-expo-app@latest MyProject --template tabs

# Install NativeWind dependencies
npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npm install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.6.14

# Initialize Tailwind
npx tailwindcss init

# Copy the design system configuration (see setup steps below)
```

## 🔧 Installation & Setup

### 1. Dependencies

**Production Dependencies:**
```json
{
  "nativewind": "^4.2.0",
  "react-native-reanimated": "~3.17.4",
  "react-native-safe-area-context": "5.4.0"
}
```

**Development Dependencies:**
```json
{
  "tailwindcss": "^3.4.17",
  "prettier-plugin-tailwindcss": "^0.6.14"
}
```

### 2. Configuration Files

#### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Full configuration in next section
    },
  },
  plugins: [],
}
```

#### `babel.config.js`
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

#### `metro.config.js`
```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })
```

#### `global.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### `nativewind-env.d.ts`
```typescript
/// <reference types="nativewind/types" />
```

### 3. Import Global CSS

In your root layout (`app/_layout.tsx`):
```typescript
import '../global.css';
```

## 🎨 Design Tokens

### Color Palette

#### Brand Colors
```javascript
snap: {
  yellow: '#FFFC00',        // Primary brand color
  'yellow-dark': '#FFE100', // Darker yellow variant
  white: '#FFFFFF',
  black: '#000000',
  ghost: '#F7F7F7',         // Light gray
  'ghost-dark': '#161618',  // Dark mode background
  blue: '#0EADFF',         // Accent blue
  purple: '#8B5FBF',       // Accent purple  
  pink: '#FF6B9D',         // Accent pink
  green: '#4AC8EA',        // Accent green
  red: '#FF4757',          // Error/alert
  orange: '#FF6348',       // Warning
}
```

#### Semantic Colors
```javascript
// Light mode
light: {
  primary: '#FFFFFF',      // Main background
  secondary: '#F7F7F7',    // Secondary background
  tertiary: '#EEEEEE',     // Tertiary background
  border: '#E0E0E0',       // Border color
  text: '#000000',         // Primary text
  'text-secondary': '#666666', // Secondary text
}

// Dark mode
dark: {
  primary: '#161618',      // Main background
  secondary: '#262626',    // Secondary background
  tertiary: '#404040',     // Tertiary background
  border: '#2A2A2A',       // Border color
  text: '#FFFFFF',         // Primary text
  'text-secondary': '#B3B3B3', // Secondary text
}
```

### Typography Scale

```javascript
fontSize: {
  'snap-xs': ['12px', { lineHeight: '16px', letterSpacing: '0.01em' }],
  'snap-sm': ['14px', { lineHeight: '20px', letterSpacing: '0.01em' }],
  'snap-base': ['16px', { lineHeight: '24px', letterSpacing: '0.01em' }],
  'snap-lg': ['18px', { lineHeight: '28px', letterSpacing: '0.01em' }],
  'snap-xl': ['20px', { lineHeight: '32px', letterSpacing: '0.01em' }],
  'snap-2xl': ['24px', { lineHeight: '36px', letterSpacing: '0.01em' }],
  'snap-3xl': ['30px', { lineHeight: '40px', letterSpacing: '0.01em' }],
  'snap-4xl': ['36px', { lineHeight: '44px', letterSpacing: '0.01em' }],
}
```

### Spacing System

```javascript
spacing: {
  'snap-xs': '4px',    // 0.25rem
  'snap-sm': '8px',    // 0.5rem
  'snap-md': '16px',   // 1rem
  'snap-lg': '24px',   // 1.5rem
  'snap-xl': '32px',   // 2rem
  'snap-2xl': '48px',  // 3rem
  'snap-3xl': '64px',  // 4rem
}
```

### Border Radius

```javascript
borderRadius: {
  'snap-sm': '8px',    // Small radius
  'snap-md': '12px',   // Medium radius
  'snap-lg': '16px',   // Large radius
  'snap-xl': '20px',   // Extra large radius
  'snap-2xl': '24px',  // 2X large radius
  'snap-full': '999px', // Fully rounded
}
```

### Shadows

```javascript
boxShadow: {
  'snap-sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
  'snap-md': '0 4px 8px rgba(0, 0, 0, 0.12)',
  'snap-lg': '0 8px 16px rgba(0, 0, 0, 0.15)',
  'snap-xl': '0 12px 24px rgba(0, 0, 0, 0.18)',
}
```

## 🧩 Components

### Primary Button
```tsx
<TouchableOpacity className="bg-snap-yellow rounded-snap-full py-snap-md px-snap-xl">
  <Text className="text-snap-base font-bold text-snap-black text-center">
    Primary Button
  </Text>
</TouchableOpacity>
```

### Secondary Button
```tsx
<TouchableOpacity className="bg-snap-blue rounded-snap-full py-snap-md px-snap-xl">
  <Text className="text-snap-base font-bold text-snap-white text-center">
    Secondary Button
  </Text>
</TouchableOpacity>
```

### Outline Button
```tsx
<TouchableOpacity className="border-2 border-light-border dark:border-dark-border rounded-snap-full py-snap-md px-snap-xl">
  <Text className="text-snap-base font-bold text-light-text dark:text-dark-text text-center">
    Outline Button
  </Text>
</TouchableOpacity>
```

### Card Component
```tsx
<View className="bg-light-secondary dark:bg-dark-secondary rounded-snap-xl p-snap-lg shadow-snap-md">
  <Text className="text-snap-xl font-bold text-light-text dark:text-dark-text mb-snap-sm">
    Card Title
  </Text>
  <Text className="text-snap-base text-light-text-secondary dark:text-dark-text-secondary">
    Card description text goes here.
  </Text>
</View>
```

### Story Circle
```tsx
<View className="items-center">
  <View className="w-16 h-16 bg-snap-blue rounded-snap-full mb-snap-xs" />
  <Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">
    Story Name
  </Text>
</View>
```

### Chat Item
```tsx
<TouchableOpacity className="bg-light-secondary dark:bg-dark-secondary rounded-snap-lg p-snap-md shadow-snap-sm">
  <View className="flex-row items-center">
    <View className="w-12 h-12 bg-snap-green rounded-snap-full mr-snap-sm" />
    <View className="flex-1">
      <Text className="text-snap-base font-bold text-light-text dark:text-dark-text">
        Contact Name
      </Text>
      <Text className="text-snap-sm text-light-text-secondary dark:text-dark-text-secondary">
        Last message preview
      </Text>
    </View>
    <Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">
      2m
    </Text>
  </View>
</TouchableOpacity>
```

## 📱 Usage Examples

### Screen Layout
```tsx
export default function MyScreen() {
  return (
    <View className="flex-1 bg-light-primary dark:bg-dark-primary">
      {/* Header */}
      <View className="bg-snap-yellow px-snap-md py-snap-lg pt-snap-2xl">
        <Text className="text-snap-2xl font-bold text-snap-black text-center">
          Screen Title
        </Text>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 px-snap-md py-snap-lg">
        {/* Your content here */}
      </ScrollView>
    </View>
  );
}
```

### Typography Hierarchy
```tsx
{/* Headings */}
<Text className="text-snap-4xl font-bold text-light-text dark:text-dark-text">
  Main Heading
</Text>
<Text className="text-snap-2xl font-bold text-light-text dark:text-dark-text">
  Section Heading  
</Text>
<Text className="text-snap-lg font-bold text-light-text dark:text-dark-text">
  Subsection Heading
</Text>

{/* Body Text */}
<Text className="text-snap-base text-light-text dark:text-dark-text">
  Body text content
</Text>
<Text className="text-snap-sm text-light-text-secondary dark:text-dark-text-secondary">
  Secondary text
</Text>
<Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">
  Caption text
</Text>
```

## ✨ Best Practices

### 1. Color Usage
- **Primary Actions**: Use `bg-snap-yellow` for main CTAs
- **Secondary Actions**: Use `bg-snap-blue` or outline styles
- **Backgrounds**: Use semantic colors (`light-primary`, `dark-primary`)
- **Text**: Always provide dark mode alternatives

### 2. Spacing Consistency
- Use the `snap-*` spacing scale consistently
- Prefer `snap-md` (16px) for general padding/margins
- Use `snap-sm` (8px) for tight spacing
- Use `snap-lg` (24px) or larger for section spacing

### 3. Typography
- Use `text-snap-base` (16px) as default body text
- Reserve `text-snap-4xl` and `text-snap-3xl` for hero sections
- Always include `font-bold` for headings
- Use semantic text colors with dark mode support

### 4. Border Radius
- Use `rounded-snap-lg` (16px) for cards and containers
- Use `rounded-snap-full` (999px) for circular elements
- Use `rounded-snap-md` (12px) for smaller components

### 5. Dark Mode Support
Always include both light and dark variants:
```tsx
className="bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text"
```

## 📁 Project Structure

```
aicompanion-client/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Main chat interface demo
│   │   └── two.tsx            # Design system showcase
│   └── _layout.tsx            # Root layout with global CSS import
├── components/
│   └── Themed.tsx             # Custom themed components (if needed)
├── constants/
│   └── Colors.ts              # Color constants (if needed)
├── assets/
│   └── images/                # App icons and images
├── global.css                 # Tailwind directives
├── tailwind.config.js         # Design system configuration
├── babel.config.js            # Babel configuration for NativeWind
├── metro.config.js            # Metro bundler configuration
├── nativewind-env.d.ts        # TypeScript types for NativeWind
└── package.json               # Dependencies and scripts
```

## 🎛 Customization

### Adding New Colors
1. Extend the `colors` object in `tailwind.config.js`:
```javascript
colors: {
  snap: {
    // ... existing colors
    'new-color': '#FF0000',
  }
}
```

2. Use in components:
```tsx
<View className="bg-snap-new-color" />
```

### Adding New Spacing
1. Extend the `spacing` object:
```javascript
spacing: {
  // ... existing spacing
  'snap-4xl': '96px',
}
```

2. Use with any spacing utility:
```tsx
<View className="p-snap-4xl m-snap-4xl" />
```

### Creating Custom Components
Create reusable components using the design tokens:

```tsx
// components/SnapButton.tsx
interface SnapButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onPress: () => void;
}

export function SnapButton({ variant, children, onPress }: SnapButtonProps) {
  const variants = {
    primary: 'bg-snap-yellow',
    secondary: 'bg-snap-blue',
    outline: 'border-2 border-light-border dark:border-dark-border'
  };

  return (
    <TouchableOpacity 
      className={`${variants[variant]} rounded-snap-full py-snap-md px-snap-xl`}
      onPress={onPress}
    >
      <Text className="text-snap-base font-bold text-center">
        {children}
      </Text>
    </TouchableOpacity>
  );
}
```

## 🚀 Starting a New Project

1. **Copy this template structure**
2. **Install dependencies** (see Installation section)
3. **Copy configuration files** (`tailwind.config.js`, `babel.config.js`, etc.)
4. **Import global CSS** in your root layout
5. **Start building** with the design tokens!

## 🔄 Updates and Maintenance

- Keep NativeWind and Tailwind CSS updated to latest compatible versions
- Test design tokens across light/dark modes
- Validate color contrast ratios for accessibility
- Document any custom additions to the design system

---

**Template Version:** 1.0.0  
**Last Updated:** 2025-01-13  
**Compatible with:** Expo SDK 54+, NativeWind 4.2+, Tailwind CSS 3.4+