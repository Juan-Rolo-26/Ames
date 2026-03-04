import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]

const normalizeBasePath = (value) => {
  if (!value) return '/'
  return value.endsWith('/') ? value : `${value}/`
}

const basePath = normalizeBasePath(
  process.env.VITE_BASE_PATH || (repositoryName ? `/${repositoryName}` : '/'),
)

export default defineConfig({
  plugins: [react()],
  base: basePath,
})
