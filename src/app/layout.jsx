import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AsFitness',
  description: 'App fitness para anotar tus ejercicios.',
  keywords: ['fitness', 'salud', 'bienestar', 'ejercicio']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
