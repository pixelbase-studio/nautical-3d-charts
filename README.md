# 🎨 Tailwind CSS v4 + Vite Starter — Vanilla HTML/JS

A clean, minimal starter project using **Tailwind CSS v4** and **Vite** with plain HTML and JavaScript. Fast dev server with hot reload, optimised production builds, and CSS-first Tailwind configuration.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed, then install pnpm if you haven't already:

```bash
npm install -g pnpm
```

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Install dependencies
pnpm install
```

### Development

```bash
pnpm dev
```

Opens automatically at `http://localhost:3000` with hot reload.

### Build for Production

```bash
pnpm build
```

Outputs an optimised build to `dist/`.

### Preview Production Build

```bash
pnpm preview
```

---

## 📁 Project Structure

```
├── index.html              # Entry point
├── src/
│   ├── style.css           # Tailwind v4 import + @theme config
│   └── main.js             # Your JavaScript
├── dist/                   # Production build output (git-ignored)
├── vite.config.js          # Vite + Tailwind v4 plugin config
├── package.json
└── .gitignore
```

---

## ⚙️ Tailwind v4 Configuration

Tailwind v4 is configured directly in `src/style.css` — no `tailwind.config.js` needed.

```css
@import "tailwindcss";

@theme {
  --color-brand: #3b82f6;
  --font-sans: 'Inter', sans-serif;
}
```

---

## 🛠️ Scripts

| Command        | Description                           |
|----------------|---------------------------------------|
| `pnpm dev`     | Start Vite dev server with hot reload |
| `pnpm build`   | Build optimised production output     |
| `pnpm preview` | Preview the production build locally  |

---

## 📦 Dependencies

- [Vite](https://vitejs.dev/) — Next generation frontend tooling
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS framework
- [@tailwindcss/vite](https://tailwindcss.com/docs/installation/vite) — Official Vite plugin for Tailwind v4

---

## 📄 License

MIT — free to use, modify, and distribute.
