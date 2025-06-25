import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domosbor',
  description: 'Построй свою мечту',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
