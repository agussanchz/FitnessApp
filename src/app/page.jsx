import api from "@/api";
import Link from "next/link";

export default async function Home() {

  const daysOfWeek = await api.list()

  return (
    <>
      <section className="p-4">
        <div className="flex flex-col gap-4">
        {daysOfWeek.map((days) => (
          <Link href={`/${days.id}`} className="font-bold text-slate-900 flex justify-center items-center text-center cursor-pointer p-3 rounded-xl border border-slate-900" key={days.id}>{days.title}</Link>
        ))}
        </div>
      </section>
    </>
  )
}