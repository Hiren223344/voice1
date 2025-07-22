import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    server: {
      port: Number(process.env.PORT) || 4000,
      host: '0.0.0.0'
    },
    // ⬇️ Move this OUTSIDE `server`
    preview: {
      allowedHosts: ['voice1-6l03.onrender.com']
    }
  };
});
// This configuration file sets up Vite for a project, defining environment variables,
