import React from 'react'

const Create = () => {
  return (
    <fieldset>
      <legend>Create.jsx</legend>
      <h1>To Do List</h1>
      <form>
        <p>Task:
        {/* task textbox  */}
        <input value= "What to do?" type="text" />

        <input type="date" name="" id="" />

        {/* drop-down menu for priority-level */}
          <select name="priority-level" id="priority-level"> 
            <option value="Choose Priority Level">Choose Priority Level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button> Submit </button>
        </p>

      </form>
      
    </fieldset>
  )
}

export default Create