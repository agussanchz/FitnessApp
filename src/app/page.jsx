import api from "@/api";
import Link from "next/link";

export default async function Home() {

  const daysOfWeek = await api.list()

  return (
    <>
      <html>
        <body>
          <header>
            <h1>Bienvenido a la app</h1>
          </header>
          <main className="h-screen flex justify-center items-center">
            <section className="flex flex-col gap-3">
              {daysOfWeek.map((days) => (
                <span className="font-bold text-gray-200 flex justify-center" key={days.id}>{days.title}</span>
              ))}
              <Link href={'/agregarEjercicios'} key={"keyRouteExercise"} className="border p-4">Agregar ejercicios</Link>
            </section>
          </main>
          <footer>aprendiendo next.js</footer>
        </body>
      </html>
    </>
  )
}
