# PostCSS setup in different apps

This setup aims to achieve Sass-like flexibility while staying fully compatible with vanilla CSS. It allows you to use global media query variables, nesting, autoprefixing, CSS minification (`cssnano`), and other enhancements without manually importing files in every component.

Using PostCSS with plugins like `postcss-global-data`, `postcss-nesting`, `autoprefixer`, and optionally `postcss-preset-env`, you can replicate many Sass features across any project (Astro, Vite + React, Next.js) with a clean and scalable workflow.