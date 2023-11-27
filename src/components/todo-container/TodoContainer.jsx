import "./TodoContainer.scss"
import { useCreateTaskMutation, useGetTaskQuery } from "../../api/taskSlice"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import TodoRender from "../todo-render/TodoRender";
import { IoIosCloseCircle } from "react-icons/io";

const TodoContainer = () => {
  const [createTask] = useCreateTaskMutation()

  const [taskName, setTaskName] = useState('')
    const [openEditModal, setOpenEditModal] = useState(false)
  const handleCreateTask = (e) => {
    e.preventDefault()
    const newTask = {
      id: uuidv4,
      name: taskName
    }
    setTaskName("")

    createTask(newTask)
    console.log(newTask);
  }


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
    {/* Edit Modal */}
      <div style={openEditModal ? {display: 'flex'} : {display: "none"}} className="edit__modal-card">
          <input type="text" />
          <button className="edit-btn">Edit</button>
          <button onClick={() => setOpenEditModal(false)} className="close-modal"><IoIosCloseCircle /></button>
      </div>
    </div>

  </>
  )
}

export default TodoContainer