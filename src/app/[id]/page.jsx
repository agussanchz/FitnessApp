import api from "@/api";
import Link from "next/link";
import Form from "../components/Form";

export default async function DaysPage({ params: { id } }) {

    const daysOfWeek = await api.fetch(id)

    return (
        <section className="flex flex-col gap-3">
            <Link href={'/'} className="text-white">&lt;&ndash;</Link>
            <h2 className="font-bold text-gray-400 flex justify-center bg-slate-900 p-3 rounded-full">
                {daysOfWeek.title}
            </h2>
            <Form days={daysOfWeek.title}/>
        </section>
    )
}