import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite'; // Ensure this import is correct

export default defineConfig({
  plugins: [react(),tailwind()]
});