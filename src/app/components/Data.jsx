import React from 'react'

export default function Data({ infoForm, days, deleteExercice }) {

    let lunes = []

    if (days === 'Lunes') {
        lunes = infoForm
    }

    console.log(lunes)
    return (
        <div className="flex flex-col justify-center p-2 gap-2">
            {lunes.map((x) => (
                <>
                    <div className='flex flex-col justify-center items-center gap-3 p-2 border' key={x.id}>
                        <span>{x.ejercicio}</span>
                        <span>{x.peso}</span>
                        <button onClick={() => deleteExercice(x.id)} className="text-red-600">eliminar</button>
                    </div>
                </>
            ))}
        </div>
    )
}
