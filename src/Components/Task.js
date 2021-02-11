import './Task.css'

/* GENERA LA TAREA, SU CAMBIO DE ESTADO (FALSE-TRUE) Y PODER BORRAR */

const Task = (props) =>  (
          <div className='tasks d-flex justify-content-between' key={props.tasks.name}>      
               <div className='col-xs-2'>
                    
                    <input type='radio' checked={props.tasks.done} onClick={() => props.checkDone(props.tasks.id)}></input>
               </div>
               <div className='col-xs-8'>
                    {props.tasks.name}
               </div>
               <div onClick={() => props.removeTask(props.tasks.id)} role='button' className='col-xs-2 delete'>Borrar</div>
          </div>
)

export default Task