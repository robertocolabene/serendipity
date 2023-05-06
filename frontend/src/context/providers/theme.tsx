'use client';

import useLocalStorage from '@/hooks/useLocalStorage';
import { createContext, useContext } from 'react';

const ThemeContext = createContext({});

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

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  const context = { theme, darkTheme, toggleTheme }

  return (
    <ThemeContext.Provider value={context}>   
      {children}
    </ThemeContext.Provider>
  );
}