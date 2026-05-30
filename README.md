# The Dark Knight - Web Experience

A cinematic, highly interactive React application dedicated to the lore of Batman. This project features a custom dynamic canvas effect for the Hero section, scroll-based framer-motion animations, and accurate lore sections ranging from Bruce Wayne's origins to his most notorious Rogues Gallery.

## 🦇 Features

- **Interactive Canvas Hero:** A custom mouse-tracking canvas that reveals a glowing bat-signal effect underneath the shadows.
- **Dynamic Story Sections:** Smooth scrolling to distinct sections including Gotham, Bruce Wayne, The Rogues Gallery, and The Mission.
- **Cinematic Aesthetics:** Deep dark mode styling with crimson and gold accents, using premium fonts (`Anton`, `Bebas Neue`, `Crimson Pro`, and `Cinzel`).
- **Framer Motion Animations:** Smooth entrance animations and scroll-triggered reveals for all content cards.
- **Fully Responsive:** Adapts flawlessly to desktop, tablet, and mobile screens.

## 🛠️ Tech Stack

- **Framework:** React + Vite
- **Styling:** Vanilla CSS (CSS Variables, Flexbox, Grid)
- **Animations:** Framer Motion
- **Canvas:** Native HTML5 Canvas API

## 🚀 Local Development

To run this project on your local machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173/`.

---

## 🌐 How to Host on GitHub Pages

Yes! You can absolutely host this Vite + React site on GitHub Pages for free. Since this is a Vite project, it requires a few specific steps to bundle and push the production build.

Follow this step-by-step guide:

### Step 1: Update `vite.config.js`
Open your `vite.config.js` file and add the `base` property. The base should be the name of your GitHub repository. For example, if your repository is named `batman`, it should look like this:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/batman/', // REPLACE 'batman' WITH YOUR EXACT GITHUB REPO NAME
})
```

### Step 2: Install the `gh-pages` Package
In your terminal (inside the `vite-project` folder), run the following command to install the deployment tool:
```bash
npm install gh-pages --save-dev
```

### Step 3: Update `package.json` Scripts
Open your `package.json` file and add these two lines inside the `"scripts"` block:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",        // <-- ADD THIS
  "deploy": "gh-pages -d dist"         // <-- ADD THIS
}
```

### Step 4: Initialize Git & Push to GitHub (If you haven't already)
Ensure your project is pushed to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 5: Deploy!
Run the deployment script from your terminal:
```bash
npm run deploy
```
*This command will automatically build your project (creating a `dist` folder) and push that folder to a new branch called `gh-pages` on your repository.*

### Step 6: Configure GitHub Settings
1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages** (on the left sidebar).
3. Under **Build and deployment** > **Source**, ensure "Deploy from a branch" is selected.
4. Under **Branch**, select `gh-pages` from the dropdown, and select `/ (root)`. Click **Save**.

Wait a minute or two, refresh the page, and GitHub will provide you with the live link to your hosted Batman website!
