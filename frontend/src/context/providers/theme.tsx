'use client';

import { createContext } from 'react';

export const ThemeContext = createContext({});

const config = {
  template: 'forge',
  mode: 'dark'
}

export default function ThemeProvider({ children }: {
    children: React.ReactNode
}) {
  return (
    <ThemeContext.Provider value={config}>
      {children}
    </ThemeContext.Provider>
  );
}