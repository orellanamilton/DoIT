import React, {useState, useEffect}from 'react'
import Input from './Input'
import Task from './Task'
import './CreateTask.css'

function CreateTask() {
   const [tasks, setTasks] = useState([
    {name: 'Pasear al perro 🐶', done:false, id:0},
    {name: 'Ir al mercado 🛒', done:false, id:1},
    {name: 'Reunión 15.00hs 📅', done:false, id:2},
    {name: 'Clase de yoga 🧘‍♂️', done:true, id:3}
   ])

/*    useEffect(() => {
       let data = localStorage.getItem('tasks');
       if (data != null) {
           setTasks(JSON.parse(data))
       } else {
           setTasks([
            {name: 'Pasear al perro 🐶', done:false, id:0},
            {name: 'Ir al mercado 🛒', done:false, id:1},
            {name: 'Reunión 15.00hs 📅', done:false, id:2},
            {name: 'Clase de yoga 🧘‍♂️', done:true, id:3}
           ])
       }
   }, [])

   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }, [tasks])
 */

   /* GENERA UNA NUEVA TAREA */
    const createNewTask = taskName => {
       if(!tasks.find(t => t.name === taskName)) {
           setTasks([...tasks, {name: taskName, done:false, id:Date.now()}])
       }
   }

   /* CAMBIA EL ESTADO DE LA TAREA */
   const checkDone = id => {
        setTasks(tasks.map(t => (t.id === id ? {...t, done: !t.done} : t)))
    }

    /* REMUEVE LA TAREA */
    const removeTask = id => {

        const removeArr = [...tasks].filter(todo => todo.id !== id)

        setTasks(removeArr)
    }
   
    /* IMPRIME LA TAREA Y PASA PARAMETROS A TASK.JS */
    const taskTableRows = (done) => (
        tasks
        .filter(task => task.done === done)
        .map(tasks => (
            <Task tasks={tasks} checkDone={checkDone} removeTask={removeTask} key={tasks.name}/>
        ))
    )


   console.log(tasks)
    return (
        <div className='row justify-content-center'>

            <h1 className='col-md-12 order-1 justify-content-center'>¿Cuáles son tus planes para hoy?</h1> 
            <div className='col-md-5 order-2 notComplete justify-content-center'>
               {taskTableRows(false)}
                <Input createNewTask={createNewTask}/>
            </div>

            <div className='col-md-5 order-3 complete justify-content-center'>
                <h2>Has terminado {taskTableRows(true).length} tarea(s)</h2>
                <h3>{taskTableRows(false).length} por terminar</h3>
                {taskTableRows(true)}
            </div>

        </div>
    )
}

export default CreateTask

