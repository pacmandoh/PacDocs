import { defineContentConfig, defineCollection } from '@nuxt/content'
import {logger} from '@nuxt/kit'

/**
 * content path
 * docs/example
 */ 
const docsSourceBase = process.env.DOCS_PATH
const examplesSourceBase = process.env.EXAMPLES_PATH 
// remote docs files
const docsSource: any = {
  name: 'pacdocs-docs',
  driver: 'github',
  repo: 'pacmandoh/docs',
  branch: 'main',
  dir: 'docs',
  prefix: '/1.docs',
  token: process.env.GITHUB_TOKEN || ''
}
if (docsSourceBase) {
  docsSource.driver = 'fs'
  docsSource.base = docsSourceBase
  logger.success(`Using local docs from ${docsSourceBase}`)
}
// remote examples
const examplesSource: any = {
  name: 'pacdocs-examples',
  driver: 'github',
  repo: 'pacmandoh/examples',
  branch: 'main',
  dir: 'docs',
  prefix: '/docs/1.examples',
  token: process.env.GITHUB_TOKEN || ''
}
if (examplesSourceBase) {
  examplesSource.driver = 'fs'
  examplesSource.base = examplesSourceBase
  logger.success(`Using local examples from ${examplesSourceBase}`)
}

/**
 * defineContentConfig({})
 */
export default defineContentConfig({
  collections: {
    content: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every markdown file inside the `content` directory
      source: {
        include: '**',
        exclude: ['**/.!(navigation.yml)']
      }
    })
  }
})
