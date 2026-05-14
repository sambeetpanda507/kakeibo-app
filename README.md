# Kakeibo App

Expo Router app for building Kakeibo onboarding and auth flows.

## Stack

- Expo
- Expo Router
- React Native
- TypeScript

## Run

1. Install deps:

```bash
npm install
```

2. Start dev server:

```bash
npx expo start
```

Useful targets:

```bash
npm run android
npm run ios
npm run web
```

## Project Structure

```text
app/
  _layout.tsx
  index.tsx

assets/
  fonts/
  images/

hooks/
  use-theme.ts

theme/
  colors/
    light.ts
    dark.ts
  index.ts
  typography.ts
  types.ts
```

## Routing

This project uses Expo Router file-based routing.

- `app/index.tsx` -> home screen
- `app/_layout.tsx` -> shared stack layout

## Theme

Theme setup currently focuses on light/dark color tokens.

- `theme/colors/light.ts` -> light mode colors
- `theme/colors/dark.ts` -> dark mode colors
- `theme/index.ts` -> theme exports
- `hooks/use-theme.ts` -> returns active color theme
- `theme/typography.ts` -> shared font size and line-height tokens

## Fonts

Custom fonts live in `assets/fonts/` and should be loaded from `app/_layout.tsx` with `expo-font`.

Current font files:

- `Nunito-VariableFont_wght.ttf`
- `Nunito-Italic-VariableFont_wght.ttf`

## SVG

SVG support uses:

- `react-native-svg`
- `react-native-svg-transformer`

`metro.config.js` is configured so local `.svg` files can be imported as components.

Example:

```tsx
import HeroImg from "@/assets/images/hero.svg";
```

## Notes

- Restart Expo with cache clear after Metro config changes:

```bash
npx expo start --clear
```

- If adding new color tokens, keep keys aligned between `light.ts` and `dark.ts`.
