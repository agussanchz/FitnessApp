const days = [
    {
        title: "Lunes",
        id: "1"
    },
    {
        title: "Martes",
        id: "2"
    },
    {
        title: "Miercoles",
        id: "3"
    },
    {
        title: "Jueves",
        id: "4"
    },
    {
        title: "Viernes",
        id: "5"
    }
]

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
    list: async () => {
        await sleep(750);
        return days
    },
    fetch: async (id) => {
        await sleep(750);

        const day = days.find((day) => day.id === id);

        if (!day) {
            throw new Error(`Day with id ${id} not found`);
        }

        return day;
    }
}

export default api;