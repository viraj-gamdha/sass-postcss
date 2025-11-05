import postcssGlobalData from "@csstools/postcss-global-data";
import postcssNesting from "postcss-nesting";
import postcssCustomMedia from "postcss-custom-media";
import autoprefixer from "autoprefixer";
import cssNano from "cssnano";
// Or instead of individual plugins, you can use: import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    postcssGlobalData({
      files: ["./src/styles/media.css"], // Global media queries / variables
    }),
    postcssNesting(), // Native CSS nesting support (like Sass nesting)
    postcssCustomMedia(), // Use @media (--tablet) style queries
    autoprefixer(), // Add vendor prefixes
    ...(process.env.NODE_ENV === "production" ? [cssNano()] : []), // Minify only in production
  ],
};
