import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/military-sim-ap/', // имя репозитория
  plugins: [react()],
});
