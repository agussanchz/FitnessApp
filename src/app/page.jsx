import api from "@/api";
import Link from "next/link";

export default async function Home() {

  const daysOfWeek = await api.list()

  return (
    <>
      <section className="flex flex-col gap-3">
        {daysOfWeek.map((days) => (
          <Link href={`/${days.id}`} className="font-bold text-gray-200 flex justify-center" key={days.id}>{days.title}</Link>
        ))}
        <Link href={'/agregarEjercicios'} key={"keyRouteExercise"} className="border p-4">Agregar ejercicios</Link>
      </section>
    </>
  )
}