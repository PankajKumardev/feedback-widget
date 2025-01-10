import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/web-component.tsx'),
      name: 'FeedbackWidget',
      fileName: 'feedback-widget',
      formats: ['es', 'umd'],
    },
    cssCodeSplit: false, // Ensure CSS is bundled inside the JS
    outDir: 'dist',
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  define: {
    'process.env': '{}', // Corrected definition for process.env
  },
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
    },
  },
});
