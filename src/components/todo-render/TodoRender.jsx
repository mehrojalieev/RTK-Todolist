import "./TodoRender.scss"
import { useState } from "react";
import { useDeleteTaskMutation, useGetTaskQuery, useEditTaskMutation } from '../../api/taskSlice'
import { IoIosCloseCircle } from "react-icons/io";



const TodoRender = ({ openEditModal, setOpenEditModal }) => {

    const { data } = useGetTaskQuery()
    const [deleteTask] = useDeleteTaskMutation()
    const [editTask] = useEditTaskMutation()
    const [editInput, setEditInput] = useState('')



    const handleDeleteTask = (task) => {
        deleteTask(task)
    }

    const handleEditTask = (id) => {
        setOpenEditModal(false)
        editTask({
            id: id,
            name: editInput
        })

    }

    return (
        <div className='todo__render-wrapper'>
            {
                data?.map(tasks =>
                    <div key={tasks.id} className="todo__task-card">
                        <h3>{tasks.name}</h3>
                        <div className="tasks-btns">
                            <div style={openEditModal ? { display: 'flex' } : { display: "none" }} className="edit__modal-card">
                                <input value={editInput} onChange={(e) => setEditInput(e.target.value)} type="text" />
                                <button onClick={() => handleEditTask(tasks.id)} className="edit-btn">Edit</button>
                                <button onClick={() => setOpenEditModal(false)} className="close-modal"><IoIosCloseCircle /></button>
                            </div>
                            <button onClick={() => setOpenEditModal(true)} className="edit-btn">Edit</button>
                            <button onClick={() => handleDeleteTask(tasks)} className="delete-btn">Delete</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TodoRender