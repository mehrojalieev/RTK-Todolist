import "./TodoContainer.scss"

const TodoContainer = () => {

  return (
    <div className='todo-container'>
        <div className="create__task-form">
          <form>
            <input type="text" placeholder="Enter Task" />
            <button>Add</button>
          </form>
        </div>
    </div>
  )
}

export default TodoContainer