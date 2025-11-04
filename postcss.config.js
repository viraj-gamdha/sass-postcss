import cssnanoPlugin from "cssnano";

const config = {
  plugins: [cssnanoPlugin({
    preset: "default"
  })],
};

export default config;
