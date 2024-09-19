import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePluginRadar } from 'vite-plugin-radar'
// const ASSET_URL = process.env.VITE_ASSETS_URL || '';

// https://vitejs.dev/config/
export default defineConfig( {
  base: `/portfolio/`,
  plugins: [
    react(),
    VitePluginRadar( {
      /**
      * enable or disable scripts injection in development
      * default: false
      */
      enableDev: false,

      // Google Analytics (multiple tag can be set with an array)
      analytics: [
        {
          id: 'G-RRHKYMG4CV',
        },
      ],
      
      // Google Tag Manager (multiple tag can be set with an array)
      gtm: [
        {
          id: 'GTM-WF4LZKCL',
          // // You can set custom source for gtm script and noscript
          // gtmBase: 'https://www.googletagmanager.com/gtm.js',
          // nsBase: 'https://www.googletagmanager.com/ns.html',
        }
      ],
      // Microsoft Analytics (only one tag can be set)
      microsoft: {
        id: 'o4zt1uewsw'
      },
    } )
  ],
} )
