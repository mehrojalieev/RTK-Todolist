import "./TodoRender.scss"
import { useState } from "react";
import { useDeleteTaskMutation, useGetTaskQuery, useEditTaskMutation } from '../../api/taskSlice'
import { IoIosCloseCircle } from "react-icons/io";



const TodoRender = ({ openEditModal, setOpenEditModal }) => {

    const { data } = useGetTaskQuery()
    const [deleteTask] = useDeleteTaskMutation()
    const [editTask] = useEditTaskMutation()
    const [editInput, setEditInput] = useState('')

    const [getEditId, setGetEditId] = useState('')

    const handleDeleteTask = (task) => {
        deleteTask(task)
    }

    const controlEditTask = (id) => {
        setGetEditId(id)
        console.log(getEditId);
        setOpenEditModal(true)
    }

    const handleEditTask = (id) => {
        setOpenEditModal(false)
        if (id === getEditId) {
            editTask({
                id: id,
                name: editInput
            })
        }
    }



    return (
        <div className='todo__render-wrapper'>
            {
                data?.map(tasks =>
                    <div key={tasks.id} className="todo__task-card">
                        <h3>{tasks.name}</h3>
                        <div className="tasks-btns">
                            <button onClick={() => controlEditTask(tasks.id)} className="edit-btn">Edit</button>
                            <button onClick={() => handleDeleteTask(tasks)} className="delete-btn">Delete</button>
                        </div>
                        {/* Edit Modal */}
                        <div style={openEditModal ? { display: 'flex' } : { display: "none" }} className="edit__modal-card">
                            <form onSubmit={() => handleEditTask(tasks.id)}>
                                <input value={editInput} onChange={(e) => setEditInput(e.target.value)} type="text" />
                                <button type="submit" onClick={() => handleEditTask(tasks.id)} className="edit-btn">Edit</button>
                                <button type="button" onClick={() => setOpenEditModal(false)} className="close-modal"><IoIosCloseCircle /></button>
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TodoRender