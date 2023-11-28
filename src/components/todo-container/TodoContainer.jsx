import "./TodoContainer.scss"
import { useCreateTaskMutation } from "../../api/taskSlice"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import TodoRender from "../todo-render/TodoRender";

const TodoContainer = () => {
  const [createTask] = useCreateTaskMutation()

  const [taskName, setTaskName] = useState('')
  const [openEditModal, setOpenEditModal] = useState(false)

  // Create Task !!!
  const handleCreateTask = (e) => {
    e.preventDefault()
    if (taskName.trim().length !== 0) {
      const newTask = {

        name: taskName
      }
      createTask(newTask)
      setTaskName("")
      console.log(newTask);
    }

  }

  // EDIT


  return (
    <>
      <div className='todo-container'>
        <div className="create__task-form">
          <form onSubmit={handleCreateTask}>
            <input value={taskName} onChange={(e) => setTaskName(e.target.value)} type="text" placeholder="Enter Task" />
            <button>Add</button>
          </form>
        </div>
        <TodoRender openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} />
      </div>

    </>
  )
}

export default TodoContainer