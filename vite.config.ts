import path from "path";

import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import react from "@vitejs/plugin-react";
import imageminGifSicle from "imagemin-gifsicle";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngQuant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import tailwindcss from "tailwindcss";
import { PluginOption, defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const plugins: PluginOption[] = [
  react() as PluginOption,
  tsconfigPaths(),
  svgr({
    svgrOptions: {
      dimensions: false,
    },
    include: ["**/*.svg", "**/*.svg?react"],
    exclude: [],
  }) as unknown as PluginOption,
  VitePWA({
    registerType: "autoUpdate",
    devOptions: {
      enabled: true,
    },
    injectRegister: "auto",
    manifest: {
      name: "Pinger",
      short_name: "Pinger",
      description: "손 끝으로 나의 건강을 알아내는 증상 분석 & 건강 관리 서비스",
      start_url: "/pinger_deploy/",
      display: "standalone",
      theme_color: "#ffffff",
      icons: [
        {
          src: "icons/icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  }),
  viteImagemin({
    // 이미지 최적화
    plugins: {
      jpg: imageminMozjpeg(),
      png: imageminPngQuant(),
      gif: imageminGifSicle(),
      svg: imageminSvgo(),
    },
  }) as PluginOption,
  tailwindcss() as unknown as PluginOption,
];

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: plugins,
    base: "/pinger_deploy/",
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "src") },
        { find: "@images", replacement: path.resolve(__dirname, "src/assets/images") },
      ],
    },
    define: {},
    server: {
      proxy: {
        "/api": {
          target: process.env.VITE_API_ENDPOINT,
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
        // "/resources": {
        //   target: "http://192.168.1.203:8080/",
        //   changeOrigin: true,
        //   // rewrite: (path) => path.replace(/^\/api/, ''),
        // },
      },
    },
  });
};
