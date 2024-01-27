import './globals.css'

export const metadata = {
  title: 'AsFitness',
  description: 'App fitness para anotar tus ejercicios.',
  keywords: ['fitness', 'salud', 'bienestar', 'ejercicio']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">Bienvenido a la app</header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Asfitness
        </footer>
      </body>
    </html>
  )
}
