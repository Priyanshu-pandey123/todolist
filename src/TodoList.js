import React from 'react'

const TodoList = ({list,deleteTask,handleCheck,handleEdit}) => {
  return (
    <div>
   
   {

    list.map((t)=>(
      <div>
        
        <h1>{t.task}</h1>
         <button onClick={() => handleCheck(t.id)}>
              {t.done ? 'Undo' : 'Done'}
            </button>

        <button onClick={()=>deleteTask(t.id)}>del</button>
        <button onClick={()=>handleEdit(t.id,t.task)}>Edit</button>
      </div>

    ))

   }
   
    </div>
  )
}

export default TodoList
