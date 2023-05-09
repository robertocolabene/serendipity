'use client';

import { useLocalStorage } from '@/hooks';
import { createContext, useContext } from 'react';

type Theme = {
  template: string
}

type ThemeContext = {
  theme: Theme, 
  darkTheme: boolean, 
  toggleDarkTheme: () => void 
} | {}

const ThemeContext = createContext<ThemeContext>({});

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: {
    children: React.ReactNode
}) {

  const theme = {
    template: 'forge'
  }

  const [darkTheme, setDarkTheme] = useLocalStorage('darkTheme',false);

  const toggleDarkTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  const context: ThemeContext = { theme, darkTheme, toggleDarkTheme }

  return (
    <ThemeContext.Provider value={context}>   
      {children}
    </ThemeContext.Provider>
  );
}