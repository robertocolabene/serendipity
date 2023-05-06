'use client';

import useLocalStorage from '@/hooks/useLocalStorage';
import { createContext, useContext } from 'react';

const ThemeContext = createContext({});
const ThemeUpdateContext = createContext({});

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export default function ThemeProvider({ children }: {
    children: React.ReactNode
}) {

  const [darkTheme, setDarkTheme] = useLocalStorage('darkTheme',false);

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}