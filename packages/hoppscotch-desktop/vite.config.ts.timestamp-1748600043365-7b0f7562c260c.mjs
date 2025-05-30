// vite.config.ts
import { defineConfig } from "file:///home/xing/run_workspace/hoppscotch/node_modules/.pnpm/vite@5.4.11_@types+node@22.9.3_sass@1.80.3_terser@5.34.1/node_modules/vite/dist/node/index.js";
import vue from "file:///home/xing/run_workspace/hoppscotch/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.11_@types+node@22.9.3_sass@1.80.3_terser@5.34.1__vue@3.5.12_typescript@5.7.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Icons from "file:///home/xing/run_workspace/hoppscotch/node_modules/.pnpm/unplugin-icons@0.19.3_@vue+compiler-sfc@3.5.12_vue-template-compiler@2.7.16_webpack-sources@3.2.3/node_modules/unplugin-icons/dist/vite.js";
import IconResolver from "file:///home/xing/run_workspace/hoppscotch/node_modules/.pnpm/unplugin-icons@0.19.3_@vue+compiler-sfc@3.5.12_vue-template-compiler@2.7.16_webpack-sources@3.2.3/node_modules/unplugin-icons/dist/resolver.js";
import Components from "file:///home/xing/run_workspace/hoppscotch/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.7_rollup@4.24.0_vue@3.5.12_typescript@5.7.2__webpack-sources@3.2.3/node_modules/unplugin-vue-components/dist/vite.js";
import path from "path";
var __vite_injected_original_dirname = "/home/xing/run_workspace/hoppscotch/packages/hoppscotch-desktop";
var host = process.env.TAURI_DEV_HOST;
var vite_config_default = defineConfig(async () => ({
  plugins: [
    vue(),
    Components({
      dts: "./src/components.d.ts",
      resolvers: [
        IconResolver({
          prefix: "icon"
        }),
        (compName) => {
          if (compName.startsWith("Hopp"))
            return { name: compName, from: "@hoppscotch/ui" };
          return void 0;
        }
      ],
      types: [
        {
          from: "vue-tippy",
          names: ["Tippy"]
        }
      ],
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ["src/components"]
    }),
    Icons({
      compiler: "vue3"
    })
  ],
  resolve: {
    alias: {
      "~": path.resolve(__vite_injected_original_dirname, "src"),
      "~/": path.resolve(__vite_injected_original_dirname, "src/")
    },
    dedupe: ["vue"]
  },
  optimizeDeps: {
    include: ["@hoppscotch/kernel"]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          kernel: ["@hoppscotch/kernel"],
          ui: ["@hoppscotch/ui"]
        }
      }
    }
  },
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: "127.0.0.1",
    hmr: host ? {
      protocol: "ws",
      host,
      port: 1421
    } : void 0,
    watch: {
      ignored: ["**/src-tauri/**"]
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS94aW5nL3J1bl93b3Jrc3BhY2UvaG9wcHNjb3RjaC9wYWNrYWdlcy9ob3Bwc2NvdGNoLWRlc2t0b3BcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3hpbmcvcnVuX3dvcmtzcGFjZS9ob3Bwc2NvdGNoL3BhY2thZ2VzL2hvcHBzY290Y2gtZGVza3RvcC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS94aW5nL3J1bl93b3Jrc3BhY2UvaG9wcHNjb3RjaC9wYWNrYWdlcy9ob3Bwc2NvdGNoLWRlc2t0b3Avdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIlxuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnXG5pbXBvcnQgSWNvblJlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgcHJvY2VzcyBpcyBhIG5vZGVqcyBnbG9iYWxcbmNvbnN0IGhvc3QgPSBwcm9jZXNzLmVudi5UQVVSSV9ERVZfSE9TVFxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKCkgPT4gKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgZHRzOiAnLi9zcmMvY29tcG9uZW50cy5kLnRzJyxcbiAgICAgIHJlc29sdmVyczogW1xuICAgICAgICBJY29uUmVzb2x2ZXIoe1xuICAgICAgICAgIHByZWZpeDogJ2ljb24nLFxuICAgICAgICB9KSxcbiAgICAgICAgKGNvbXBOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBpZiAoY29tcE5hbWUuc3RhcnRzV2l0aCgnSG9wcCcpKVxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogY29tcE5hbWUsIGZyb206ICdAaG9wcHNjb3RjaC91aScgfVxuICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgZnJvbTogJ3Z1ZS10aXBweScsXG4gICAgICAgICAgbmFtZXM6IFsnVGlwcHknXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlL10sXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb25lbnRzJ10sXG4gICAgfSksXG4gICAgSWNvbnMoe1xuICAgICAgY29tcGlsZXI6ICd2dWUzJyxcbiAgICB9KSxcbiAgXSxcblxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiflwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICAgIFwifi9cIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvXCIpLFxuICAgIH0sXG4gICAgZGVkdXBlOiBbXCJ2dWVcIl0sXG4gIH0sXG5cbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogWydAaG9wcHNjb3RjaC9rZXJuZWwnXVxuICB9LFxuXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIGtlcm5lbDogWydAaG9wcHNjb3RjaC9rZXJuZWwnXSxcbiAgICAgICAgICB1aTogWydAaG9wcHNjb3RjaC91aSddLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8vIFZpdGUgb3B0aW9ucyB0YWlsb3JlZCBmb3IgVGF1cmkgZGV2ZWxvcG1lbnQgYW5kIG9ubHkgYXBwbGllZCBpbiBgdGF1cmkgZGV2YCBvciBgdGF1cmkgYnVpbGRgXG4gIGNsZWFyU2NyZWVuOiBmYWxzZSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMTQyMCxcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxuICAgIGhtcjogaG9zdFxuICAgICAgPyB7XG4gICAgICAgIHByb3RvY29sOiBcIndzXCIsXG4gICAgICAgIGhvc3QsXG4gICAgICAgIHBvcnQ6IDE0MjEsXG4gICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICB3YXRjaDoge1xuICAgICAgaWdub3JlZDogW1wiKiovc3JjLXRhdXJpLyoqXCJdLFxuICAgIH0sXG4gIH0sXG59KSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1csU0FBUyxvQkFBb0I7QUFDNVksT0FBTyxTQUFTO0FBQ2hCLE9BQU8sV0FBVztBQUNsQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFVBQVU7QUFMakIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTSxPQUFPLFFBQVEsSUFBSTtBQUV6QixJQUFPLHNCQUFRLGFBQWEsYUFBYTtBQUFBLEVBQ3ZDLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLFdBQVc7QUFBQSxRQUNULGFBQWE7QUFBQSxVQUNYLFFBQVE7QUFBQSxRQUNWLENBQUM7QUFBQSxRQUNELENBQUMsYUFBcUI7QUFDcEIsY0FBSSxTQUFTLFdBQVcsTUFBTTtBQUM1QixtQkFBTyxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUFpQjtBQUNsRCxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sT0FBTyxDQUFDLE9BQU87QUFBQSxRQUNqQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVMsQ0FBQyxVQUFVLFlBQVk7QUFBQSxNQUNoQyxNQUFNLENBQUMsZ0JBQWdCO0FBQUEsSUFDekIsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLE1BQ0osVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUNsQyxNQUFNLEtBQUssUUFBUSxrQ0FBVyxNQUFNO0FBQUEsSUFDdEM7QUFBQSxJQUNBLFFBQVEsQ0FBQyxLQUFLO0FBQUEsRUFDaEI7QUFBQSxFQUVBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxvQkFBb0I7QUFBQSxFQUNoQztBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osUUFBUSxDQUFDLG9CQUFvQjtBQUFBLFVBQzdCLElBQUksQ0FBQyxnQkFBZ0I7QUFBQSxRQUN2QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQSxhQUFhO0FBQUEsRUFDYixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixLQUFLLE9BQ0Q7QUFBQSxNQUNBLFVBQVU7QUFBQSxNQUNWO0FBQUEsTUFDQSxNQUFNO0FBQUEsSUFDUixJQUNFO0FBQUEsSUFDSixPQUFPO0FBQUEsTUFDTCxTQUFTLENBQUMsaUJBQWlCO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
