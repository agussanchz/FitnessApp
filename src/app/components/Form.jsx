'use client'
import React, { useEffect, useState } from 'react'

export default function Form({ days }) {
    const [formData, setFormData] = useState({ ejercicio: "", peso: "" })
    const [data, setData] = useState([])

    // Verificar si existe informacion en el localStorage
    useEffect(() => {
        const item = localStorage.getItem(`${days}`)
        const ejercicio = JSON.parse(item)
        if (ejercicio?.length > 0) {
            setData(ejercicio)
        }
    },[])

    // Obtener informacion de los input
    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }

    // Manejar informacion al enviar
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.ejercicio !== "" && formData.peso !== "") {
            const newData = formData
            newData.id = data.length + 1

            setFormData({ ejercicio: "", peso: "" })
            setData([...data, newData])
        }
    }

    // Eliminar ejercicios
    const deleteExercice = (id) => {
        const newData = data.filter((ej) => ej.id !== id)
        setData(newData)
    }

    // Guardando en LocalStorage
    useEffect(() => {
        localStorage.setItem(`${days}`, JSON.stringify(data))
    }, [data]);

    return (
        <section>
            <form className="bg-red-900 flex flex-col gap-3 p-10" onSubmit={handleSubmit}>
                <h2>formulario para agregar ejercicio y peso</h2>
                <input
                    type="text"
                    name="ejercicio"
                    value={formData.ejercicio}
                    onChange={handleChange}
                    className="text-black"
                    required
                />
                <input
                    type="number"
                    name="peso"
                    value={formData.peso}
                    onChange={handleChange}
                    className="text-black"
                    required
                />
                <button type="submit" className="p-3 border">Agregar</button>
            </form>
            <div className="flex flex-col justify-center p-2 gap-2">
                {data.map((x) => (
                    <>
                        <div className='flex flex-col justify-center items-center gap-3 p-2 border' key={"key unica"}>
                            <span>{x.ejercicio}</span>
                            <span>{x.peso}</span>
                            <button onClick={() => deleteExercice(x.id)} className="text-red-600">eliminar</button>
                        </div>
                    </>
                ))}
            </div>
        </section>
    )
}
