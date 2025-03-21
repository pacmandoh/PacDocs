import yaml from '@rollup/plugin-yaml'
import pkg from './package.json'

/**
 * nuxt config
 * defineNuxtConfig({})
 */
export default defineNuxtConfig({

  // extenal modules
  modules: [
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content', // CMS
    '@nuxt/eslint',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-llms',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  // @nuxt/content config
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['r', 'py', 'tex', 'md', 'julia', 'cpp', 'csharp', 'nginx'],
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark-dimmed',
            // Theme used if `html.sepia`
            sepia: 'monokai'
          }
        }
      }
    }
  },

  runtimeConfig: {
    public: {
      version: pkg.version
    }
  },

  routeRules: {
    '/docs': { redirect: '/docs/toc', prerender: false }
  },

  // for nuxt 4
  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-01',

  vite: {
    plugins: [
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      yaml()
    ]
  },

  // @nuxt/eslint
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never'
      }
    }
  },

  // @nuxt/fonts
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700]
    },
    provider: 'local',
    experimental: {
      processCSSVariables: true
    }
  },

  // nuxt-llms
  llms: {
    domain: 'https://pacdocs.cn',
    title: 'PacDocs',
    description: '用心打造, 专注于分享!'
  }
})
