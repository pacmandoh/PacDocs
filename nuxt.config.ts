/**
 * nuxt config
 * defineNuxtConfig({})
 */
export default defineNuxtConfig({

  // extenal modules
  modules: [
    '@nuxt/content', // CMS
    '@nuxt/ui-pro',
    '@nuxt/eslint',
    '@vueuse/nuxt'
  ],

  devtools: {
    enabled: false
  },

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

  // for nuxt 4
  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-01',

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
    provider: 'local'
  }
})
