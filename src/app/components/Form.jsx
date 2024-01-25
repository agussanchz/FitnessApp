'use client'
import { useEffect, useState } from "react"

export default function Home() {
  // Estados
  const [formData, setFormData] = useState({ ejercicio: "", peso: "" })
  
  const [content, setContent] = useState(()=> {
    if(typeof window !== undefined){
      const contentFromStorage = window.localStorage.getItem("content")
      if(contentFromStorage) return JSON.parse(contentFromStorage)
    }
    return []
})
  // Obtener informacion de los input
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  // Manejar informacion al enviar
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.ejercicio !== "" && formData.peso !== "") {
      const data = formData
      data.id = content.length + 1

      setContent([...content, data])
      setFormData({ ejercicio: "", peso: "" })
    }
  }


  // Eliminar ejercicios
  const deleteExercice = (id) => {
    const newData = content.filter((ej) => ej.id !== id)
    setContent(newData)
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      window.localStorage?.setItem("content", JSON.stringify(content));
    }
  }, [content]);

  return (
    <>
      <main >
        <div className='h-[100vh] flex flex-col justify-center items-center gap-2' onSubmit={handleSubmit}>
          <form className="bg-red-900 flex flex-col gap-3 p-10" >
            <h2>formulario para agregar ejercicio y peso</h2>
            <input
              type="text"
              name="ejercicio"
              value={formData.ejercicio}
              onChange={handleChange}
              className="text-black"
            />
            <input
              type="text"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
              className="text-black"
            />
            <button type="submit" className="p-3 border">Agregar</button>
          </form>

          <div className="flex flex-col justify-center gap-2">
            {content.map((info) => (
              <div className="flex justify-center gap-3 bg-slate-800 p-3" key={info}>
                <span>{info.ejercicio}</span>
                <span>{info.peso}kg</span>
                <button onClick={() => deleteExercice(info.id)} className="text-red-600">eliminar</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
