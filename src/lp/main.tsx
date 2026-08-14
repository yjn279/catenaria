import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initAnalytics } from '../lib/analytics.ts'
import App from './App.tsx'
import './styles.css'

initAnalytics()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
