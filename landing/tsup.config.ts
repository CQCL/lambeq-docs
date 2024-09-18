import { defineConfig } from 'tsup'

export default defineConfig(
  // Script for injecting theme sync into sphinx build.
  {
    entry: ['./src/app/syncTheme.ts'],
    outDir: 'public/',
    minify: true,
    skipNodeModulesBundle: false,
    target: 'es2015',
    platform: 'browser',
    format: ['iife'],
    clean: false,
  }
)
