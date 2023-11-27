import "./TodoContainer.scss"
import { useCreateTaskMutation } from "../../api/taskSlice"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const TodoContainer = () => {
  const [createTask] = useCreateTaskMutation()

  const [taskName, setTaskName] = useState('')

  const handleCreateTask = (e) => {
    e.preventDefault()
      const newTask = {
        id: uuidv4,
        name: taskName
      }
  }

  return (
    <div className='todo-container'>
        <div className="create__task-form">
          <form onSubmit={handleCreateTask}>
            <input value={taskName} onChange={(e) => setTaskName(e.target.value)} type="text" placeholder="Enter Task" />
            <button>Add</button>
          </form>
        </div>
    </div>
  )
}

export default TodoContainer