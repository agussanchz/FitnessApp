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
                <div className='flex flex-col gap-3'>
                    <button onClick={onClose}>X</button>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="number"
                            name="peso"
                            placeholder='inserte nuevo peso'
                            className='text-black'
                            value={newWeight}
                            onChange={handleChange}
                        />
                        <button type="submit">Cambiar</button>
                    </form>
                </div>
            </section>
        </ReactModal>
    );
}