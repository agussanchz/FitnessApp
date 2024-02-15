'use client'
import React, { useEffect, useState } from 'react'
import UpdateWeigthModal from './UpdateWeigthModal'

export default function Form({ days }) {
    const [formData, setFormData] = useState({ ejercicio: "", peso: "" })
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [selectedExercise, setSelectedExercise] = useState(null); // Nuevo estado para almacenar el ejercicio seleccionado

    // Verificar si existe informacion en el localStorage
    useEffect(() => {
        const item = localStorage.getItem(`${days}`)
        const ejercicio = JSON.parse(item)
        if (ejercicio?.length > 0) {
            setData(ejercicio)
        }
    }, [])


    // Abrir Modal con ejercicio seleccionado
    const openPopup = (exercise) => {
        setSelectedExercise(exercise);
        setIsOpen(true);
    };

    // Cerrar Modal
    const closePopup = () => {
        setIsOpen(false);
    };

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

    // Función para actualizar el peso del ejercicio
    const updateExerciseWeight = (id, newWeight) => {
        setData(prevData => {
            return prevData.map(item => {
                if (item.id === id) {
                    return { ...item, peso: newWeight };
                }
                return item;
            });
        });
    };

    // Guardando en LocalStorage
    useEffect(() => {
        localStorage.setItem(`${days}`, JSON.stringify(data))
    }, [data]);

    console.log(data)
    return (
        <section>
            <form className="bg-slate-400 opacity-50 border shadow-sm shadow-slate-50 border-gray-400 flex flex-col justify-center items-center gap-3 p-10 rounded-2xl" onSubmit={handleSubmit}>
                <input
                    placeholder='Sentadilla, Press Banca, Press militar...'
                    type="text"
                    name="ejercicio"
                    value={formData.ejercicio}
                    onChange={handleChange}
                    className="w-11/12 text-black text-center p-3 rounded-md outline-none bg-transparent border-b border-black placeholder-black"
                    required
                />
                <input
                    placeholder='10, 20, 30, 40...'
                    type="number"
                    name="peso"
                    value={formData.peso}
                    onChange={handleChange}
                    className="w-11/12 text-black text-center p-3 rounded-md outline-none bg-transparent border-b border-black placeholder-black"
                    required
                />
                <button type="submit" className="text-white text-md p-3 border border-black rounded-md w-24 bg-slate-900">AGREGAR</button>
            </form>
            <div className="flex flex-col justify-center items-center p-2 gap-3 text-gray-400">
                {data.map((x) => (
                    <>
                        <div className='w-11/12 flex flex-col justify-center items-center gap-3 p-2 text-slate-900 border border-slate-900  rounded-md' key={"key unica"}>
                            <div className='flex flex-col justify-center items-center gap-3'>
                                <span className='font-bold'>{x.ejercicio}</span>
                                <span className='font-bold'>{x.peso}</span>
                            </div>
                            <div className='flex gap-4'>
                                <button onClick={() => openPopup(x)} className='border border-slate-900 p-2 rounded-md'>Cambiar peso</button>
                                <button onClick={() => deleteExercice(x.id)} className= "text-red-800 border border-red-800 p-2 rounded-md">Eliminar Ejercico</button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <UpdateWeigthModal
                isOpen={isOpen}
                onClose={closePopup}
                exercise={selectedExercise}
                updateExerciseWeight={updateExerciseWeight}
            />
        </section>
    )
}
