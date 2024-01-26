import api from "@/api";

export default async function DaysPage({ params: { id } }) {

    const daysOfWeek = await api.fetch(id)
    
    return (
        <section className="flex flex-col gap-3">
            <h2 className="font-bold text-gray-200 flex justify-center">
                {daysOfWeek.title}
            </h2>
        </section>
    )
}