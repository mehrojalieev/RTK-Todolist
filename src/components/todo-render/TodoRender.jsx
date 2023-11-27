import "./TodoRender.scss"
import { useDeleteTaskMutation, useGetTaskQuery } from '../../api/taskSlice'


const TodoRender = ({openEditModal, setOpenEditModal}) => {

    const { data } = useGetTaskQuery()
    const [deleteTask] = useDeleteTaskMutation()

    const handleDeleteTask = (task) => {
        deleteTask(task)
    }

    return (
        <div className='todo__render-wrapper'>
            {
                data?.map(tasks =>
                     <div key={tasks.id} className="todo__task-card">
                        <h3>{tasks.name}</h3>
                        <div className="tasks-btns">
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