import React, {useState} from 'react'
import './Input.css'

/* GENERA EL INPUT PARA AGREGAR UNA NUEVA TAREA */

function Input(props) {
    
    const [newTask, setNewTask] = useState('')

    const handleChange = e => setNewTask(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        props.createNewTask(newTask)

        setNewTask('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="text-center col-12"
                value={newTask}
                onChange={handleChange}
                placeholder= '+ Crea una nueva tarea...'
            />
        </form>
    )
}

export default Input
