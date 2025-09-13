# Expo Tailwind Template

A cross-platform mobile application built with Expo and React Native, featuring a modern UI powered by NativeWind (Tailwind CSS for React Native).

## Features

- Cross-platform support (iOS, Android, Web)
- Modern UI with Tailwind CSS styling via NativeWind
- Tab-based navigation using Expo Router
- TypeScript support
- Responsive design

## Tech Stack

- **Framework**: Expo (~54.0.6)
- **UI Library**: React Native (0.81.4)
- **Navigation**: Expo Router (~6.0.3)
- **Styling**: NativeWind (^4.2.0) + Tailwind CSS (^3.4.17)
- **Language**: TypeScript (~5.9.2)
- **Animations**: React Native Reanimated (~3.17.4)

## Getting Started

### Prerequisites

- Node.js (latest LTS version)
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd expo-tailwind-template
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

## Customizing the Template

After cloning this template, follow these steps to customize it for your project:

### 1. Update Project Identity

**Update app.json:**
```bash
# Edit app.json and update:
- "name": "your-app-name"
- "slug": "your-app-slug"
- "scheme": "yourappscheme"
```

**Update package.json:**
```bash
# Edit package.json and update:
- "name": "your-project-name"
```

### 2. Replace App Icons and Splash Screen

Replace the following files in `assets/images/` with your own:
- `icon.png` (1024×1024) - App icon
- `adaptive-icon.png` (1024×1024) - Android adaptive icon
- `splash-icon.png` (1284×2778) - Splash screen image
- `favicon.png` (48×48) - Web favicon

### 3. Update Design System

**Colors and Theme:**
- Edit `constants/Colors.ts` to define your app's color palette
- Modify `tailwind.config.js` to add custom colors, fonts, and spacing
- Update `global.css` for any global styling needs

**Design System Documentation:**
- Review `DESIGN_SYSTEM.md` for current design tokens
- Update it with your brand colors, typography, and component guidelines

### 4. Customize Content

**Remove Template Content:**
- Delete demo screenshots from `assets/demo/`
- Update `README.md` with your project's description
- Replace placeholder content in `app/(tabs)/` screens
- Update `components/EditScreenInfo.tsx` with your own content

**Add Your Features:**
- Create new screens in the `app/` directory
- Add custom components to `components/`
- Define your app's constants in `constants/`

### 5. Configure Development Environment

**Environment Variables:**
```bash
# Create .env files for different environments
touch .env.local
touch .env.development
touch .env.production
```

**Git Setup:**
```bash
# Initialize your own git repository
rm -rf .git
git init
git add .
git commit -m "Initial commit from expo-tailwind-template"
```

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

## Screenshots

### Main Interface
![Main Interface](./assets/demo/screenshot-1.png)

### Secondary Screen
![Secondary Screen](./assets/demo/screenshot-2.png)

## Demo

[![Demo Video](./assets/demo/demo-thumbnail.png)](./assets/demo/screencast-demo.webm)

*Click to view the demo video*

## Project Structure

```
├── app/                    # App screens and layouts (Expo Router)
│   ├── (tabs)/            # Tab-based screens
│   ├── _layout.tsx        # Root layout
│   └── modal.tsx          # Modal screen
├── assets/                # Static assets (images, fonts)
├── components/            # Reusable React components
├── constants/             # App constants and configurations
└── global.css            # Global styles
```

## License

Private project - All rights reserved.