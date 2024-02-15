'use client'
import { useState } from "react";
import ReactModal from "react-modal";

export default function UpdateWeigthModal({ isOpen, onClose, exercise, updateExerciseWeight }) {
    const [newWeight, setNewWeight] = useState("");

    const handleChange = (e) => {
        setNewWeight(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Llamar a la función de actualización con el id del ejercicio y el nuevo peso
        updateExerciseWeight(exercise.id, newWeight);
        setNewWeight("")
        onClose();
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            ariaHideApp={false}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90"
            overlayClassName="fixed inset-0"
        >
            <section>
                <div className='flex flex-col items-start gap-3 bg-slate-900 p-10 rounded-3xl'>
                    <button onClick={onClose} className="text-white">X</button>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3">
                        <input
                            type="number"
                            name="peso"
                            placeholder='Inserte nuevo peso'
                            className='text-black p-2 rounded-md outline-none text-center'
                            value={newWeight}
                            onChange={handleChange}
                        />
                        <button type="submit" className="text-gray-400 text-md p-3 border rounded-md w-24">Cambiar</button>
                    </form>
                </div>
            </section>
        </ReactModal>
    );
}