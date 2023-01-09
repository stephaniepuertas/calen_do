import React, {useState} from 'react'

const Create = () => {
  //State
  const [taskName,setTaskName]= useState("")
  const [date,setDate]= useState("")
  const [priority,setPriority]= useState("")
  const [taskCompleted, setTaskCompleted]= useState(false)

  //Handler
  const taskHandler= (e) => {
    setTaskName(e.target.value)
  }
  const dateHandler= (e) => {
    setDate(e.target.value)
  }
  const dropdown= (e) => {
    setPriority(e.target.value)
  }
  const checkbox= (e) => {
    setTaskCompleted(e.target.checked)
  }

  const createTask = (e) => {
    e.preventDefault();
    const task = {
      taskName,
      date,
      priority,
      taskCompleted
    }
    console.log('TASK BEING CREATED', task)
  }
  

  return (
    <fieldset>
      <legend>Create.jsx</legend>
      <h1>To-Do List</h1>
      <form onSubmit={createTask}>
        <p>Task:
        {/* task textbox  */}
        <input value= "What to do?" type="text" onChange={taskHandler} />

        <input type="date" name="" id="" onChange={dateHandler}/>

        {/* drop-down menu for priority-level */}
          <select name="priority-level" id="priority-level" onChange={dropdown}> 
            <option value="Choose Priority Level">Choose Priority Level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <p>
            Task completed
            <input type="checkbox" name="taskCompleted" onChange={checkbox} />
          </p>
          <button> Submit </button>
        </p>

      </form>
      
      <div>
        <h1>{taskName} </h1>
        <h1>{date} </h1>
        <h1>{priority} </h1>
        <h1>{taskCompleted} </h1>
      </div>
      
    </fieldset>
  )
}

export default Create