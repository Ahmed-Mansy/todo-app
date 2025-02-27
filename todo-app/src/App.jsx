import { useState } from 'react'
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'



function App() {
  const [todos, setTodos] = useState([])

  function addNewTodo (todo){
    setTodos([...todos, todo])
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="form w-75 text-white bg-secondary p-5">
          <h1 className='text-center'>Todo App</h1>
          <div className="todoForm">
            <TodoForm addNewTodo={addNewTodo} />
            {
              todos.length > 0 ? (
                <>
                <div className='dropdown-divider bg-white my-4'></div>
                <TodoList todos={todos} />
                </>
              ): null
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default App
