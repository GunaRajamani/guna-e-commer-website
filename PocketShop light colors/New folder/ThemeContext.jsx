import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('pocketshop-theme')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('pocketshop-theme', JSON.stringify(isDark))
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  const theme = {
    isDark,
    colors: isDark ? {
      bg: '#04060f',
      bgSecondary: '#0f1419',
      text: '#ffffff',
      textSecondary: 'rgba(255,255,255,0.6)',
      border: 'rgba(0,220,255,0.1)',
      card: 'rgba(255,255,255,0.04)',
      primary: '#00dcff',
      hover: 'rgba(0,220,255,0.12)',
    } : {
      bg: '#ffffff',
      bgSecondary: '#f8fafc',
      text: '#1f2937',
      textSecondary: 'rgba(0,0,0,0.6)',
      border: 'rgba(59,130,246,0.1)',
      card: 'rgba(59,130,246,0.04)',
      primary: '#3b82f6',
      hover: 'rgba(59,130,246,0.08)',
    }
  }

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
