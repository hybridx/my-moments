// vite.config.js
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  // Other Vite configuration options go here
  server: {
    // You can access your environment variables here if needed
    port: process.env.VITE_PORT || 3000
  },
});
