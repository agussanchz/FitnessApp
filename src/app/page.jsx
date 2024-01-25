import Link from "next/link";

export default function Home() {

  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <Link href={'/agregarEjercicios'} className="border p-4">Agregar ejercicios</Link>
      </main>

    </>
  )
}
