<div align="center">
  <img src="https://raw.githubusercontent.com/kriss2012/batman/main/vite-project/public/images/one.jpg" alt="The Dark Knight Banner" width="100%" style="border-radius: 12px; margin-bottom: 20px" />

  <h1 align="center">🦇 THE DARK KNIGHT EXPERIENCE 🦇</h1>

  <p align="center">
    <strong>A Cinematic, Highly Interactive React Web Application</strong>
    <br />
    <em>Billionaire by day. Guardian by night. Every scar a lesson, every shadow a weapon.</em>
  </p>

  <p align="center">
    <a href="https://kriss2012.github.io/batman/" target="_blank">
      <img src="https://img.shields.io/badge/Live%20Demo-Click%20Here-red?style=for-the-badge&logo=vercel" alt="Live Demo" />
    </a>
    <a href="https://github.com/kriss2012/batman/stargazers">
      <img src="https://img.shields.io/github/stars/kriss2012/batman?style=for-the-badge&color=yellow" alt="Stars" />
    </a>
    <a href="https://reactjs.org/">
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    </a>
    <a href="https://vitejs.dev/">
      <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    </a>
  </p>
</div>

---

## 📖 About The Project

**The Dark Knight Experience** is a visually stunning, immersive web application built to showcase the lore of Gotham City's protector. This project combines cutting-edge web technologies, including **Framer Motion** for silky-smooth animations and the **HTML5 Canvas API** for interactive, mouse-tracking hover effects. 

From exploring Bruce Wayne's origins to delving into the psychological profiles of his most notorious Rogues Gallery, the site is designed to feel cinematic, responsive, and alive.

<br />

## ✨ Key Features

- 🔦 **Interactive Canvas Hero:** A custom mouse-tracking canvas effect that dynamically reveals a glowing bat-signal hidden beneath the shadows of Gotham.
- 📜 **Dynamic Storytelling:** Smooth, anchor-based scrolling navigation through distinct, lore-accurate sections.
- 🎨 **Cinematic Aesthetics:** A deep, curated dark mode featuring crimson and gold accents, powered by premium typography (`Anton`, `Bebas Neue`, `Crimson Pro`, `Cinzel`).
- 🎬 **Framer Motion Animations:** Professional entrance animations, staggered scroll reveals, and interactive hover states for villain cards.
- 📱 **Responsive Design:** A flawless viewing experience that effortlessly adapts to desktop, tablet, and mobile devices.

<br />

## 🛠️ Technology Stack

| Technology | Description |
| :--- | :--- |
| **React 19** | Modern UI component architecture |
| **Vite** | Lightning-fast build tool and development server |
| **Framer Motion** | Production-ready declarative animations |
| **Vanilla CSS** | Custom styling using CSS Variables, Flexbox, and Grid |
| **HTML5 Canvas** | High-performance interactive background rendering |

<br />

## 🚀 Getting Started Locally

Want to run the Dark Knight experience on your own machine? Follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kriss2012/batman.git
   cd batman/vite-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **View the site:** Open your browser and navigate to `http://localhost:5173/`.

<br />

<details>
<summary><h2>🌐 Deployment Guide (GitHub Pages)</h2></summary>

### Want to host your own Vite + React site on GitHub Pages for free?

Since this is a Vite project, it requires a specific pipeline to bundle and deploy correctly. Here is the exact process used to deploy this site:

**1. Update `vite.config.js`**
Ensure your configuration file includes your repository name as the `base` path:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/batman/', // Your EXACT repository name
})
```

**2. Install the `gh-pages` Package**
```bash
npm install gh-pages --save-dev
```

**3. Update `package.json` Scripts**
Add these two commands to automatically handle the build and push:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

**4. Deploy to GitHub**
```bash
npm run deploy
```

**5. Configure GitHub Settings**
1. Go to your repository on **GitHub** > **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
3. Under **Branch**, select the `gh-pages` branch and click **Save**.
4. *Wait 1-2 minutes for the site to go live!*

</details>

<br />

---

<div align="center">
  <i>"It's not who I am underneath, but what I do that defines me."</i>
  <br /><br />
  <strong>Developed by <a href="https://github.com/kriss2012">Krishnapatil2006 (kriss2012)</a></strong>
</div>
