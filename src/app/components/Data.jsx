import React from 'react'

export default function Data({ infoForm, days }) {

    let lunes = []
    let martes = []

    if (days === 'Lunes') {
        lunes = infoForm
    }
    if (days === 'Martes') {
        martes = infoForm
    }

    console.log(lunes)
    return (
        <div className="flex flex-col justify-center p-2 gap-2">
            {lunes.map((x) => (
                <>
                    <span>{x.ejercicio}</span>
                    <span>{x.peso}</span>
                </>
            ))}
            {martes.map((x) => (
                <>
                    <span>{x.ejercicio}</span>
                    <span>{x.peso}</span>
                </>
            ))}
        </div>
    )
}
