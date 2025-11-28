# @mercyseat/web-ui

A reusable, themeable React component library powering the MercySeat Creator Portal and future MercySeat applications.  
Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **Radix UI**, **class-variance-authority**, **Storybook**, and **Vitest**.

Designed for consistency, accessibility, and ease of iteration across the MercySeat ecosystem.

---

## ✨ Features

- **Fully typed** React components (TypeScript + vite-plugin-dts)
- **Themed with Tailwind v4** and MercySeat’s color system
- **Composable UI primitives** using `cva` + Radix primitives
- **Consumer-friendly builds:** ESM + CJS + generated type definitions
- **Storybook** for component documentation and visual development
- **Vitest + Testing Library** for fast, reliable unit tests
- **asChild support** (Radix Slot) for flexible composition
- Designed for consumption via  
  - **GitHub dependency**, or  
  - Publishing to **npm** (optional)

---

## 📦 Installation

### Install from GitHub (recommended for internal MercySeat apps)

In the consuming app’s `package.json`:

```jsonc
"dependencies": {
  "@mercyseat/web-ui": "git+https://github.com/<your-username>/mercyseat-web-ui.git#main"
}
```

Then install:

```bash
pnpm install
```

## 🚀 Usage

Import components directly

```typescript
import { Button } from "@mercyseat/web-ui";

export function Example() {
  return (
    <Button variant="blue-hepatica-solid" size="md">
      Save changes
    </Button>
  );
}
```

The library injects its own stylesheet:
```typescript
import "./styles.css";
```

Consumers do not need to configure Tailwind or fonts to use MercySeat UI components.

## 🔧 Development

Clone and install dependencies:

```bash
git clone https://github.com/<you>/mercyseat-web-ui.git
cd mercyseat-web-ui
pnpm install
```

## 🖥️ Storybook

Start Storybook:
```bash
pnpm storybook
```

Visit:

`http://localhost:6006`


Storybook provides:

- Component previews
- Documentation
- Playground controls
- Design review environment

## 🧪 Testing

Run the entire test suite:
```bash
pnpm test
```

Watch mode:
```bash
pnpm test:watch
```

Coverage:
```bash
pnpm test:coverage
```

This library uses:

- Vitest
- @testing-library/react
- @testing-library/user-event
- jsdom

## 🏗️ Building the library

```bash
pnpm build
```

Outputs the following into /dist:

- `index.esm.js` – ESM bundle
- `index.cjs.js` – CommonJS bundle
- `index.d.ts` – Type definitions
- Compiled CSS (Tailwind v4)

`prepare` automatically runs `vite build` so GitHub consumers get a fresh build.

## 🗂️ Project Structure

```css
src/
  components/
    button.tsx
    input.tsx
    ...
  lib/
    utils.ts
  index.css
  index.ts

.storybook/
vitest.config.ts
vite.config.ts
README.md
```

## 🎨 Design System Principles

- Typography:\
Manrope (Google Fonts) via font-sans
- Color tokens:\
Custom MercySeat colors via Tailwind v4 theme
- Component architecture:
  - Variant props via class-variance-authority
  - asChild via Radix Slot
  - Accessible markup
  - Composable styling

Inspired by the shadcn/ui philosophy while customized for MercySeat’s brand and UX needs.

## 🔁 Versioning & Releasing

Using GitHub dependencies:

- Push to main
- Consumers reinstall → they get updated components automatically

## 🤝 Contributing

When adding or modifying components:

1. Add/Update component in src/components
2. Add unit tests
3. Add Storybook stories
4. Export from src/index.ts
5. Verify everything in Storybook
6. Commit + push

Linting:
```bash
pnpm lint
```

## 📝 License

MIT License.
Copyright © MercySeat.