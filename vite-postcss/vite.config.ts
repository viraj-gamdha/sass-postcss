import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// For css modules transformations
import path from "path";
import crypto from "crypto";
// Postcss
import postcssPresetEnv from "postcss-preset-env";
import cssNano from "cssnano";
import postcssGlobalData from "@csstools/postcss-global-data";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: (className, filePath) => {
        const rawFileName = path.basename(filePath); // App.module.scss
        const cleaned = rawFileName
          .replace(/\b.module\b/, "") // Remove 'module'
          .replace(/\.[^/.]+$/, "") // Remove extension
          .toLowerCase(); // Convert to lowercase

        const hash = crypto
          .createHash("sha256")
          .update(`${cleaned}_${className}`)
          .digest("hex")
          .slice(0, 5);

        return `${cleaned}_${className}_${hash}`;
      },
    },
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 2,
          features: {
            "nesting-rules": true,
            "color-functional-notation": true,
            "color-mix": true,
            "custom-media-queries": true
          },
        }),
        postcssGlobalData({ files: ["src/styles/media.css"] }), // Global media queries
        autoprefixer(), // Add vendor prefixes
        ...(process.env.NODE_ENV === "production" ? [cssNano()] : []), // Minify in prod only
      ],
    },
  },
});
