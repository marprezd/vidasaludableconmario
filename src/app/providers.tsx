// src/app/providers.tsx
'use client'

import { ThemeProvider as NextThemesProviders } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProviders
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemesProviders>
  )
}
