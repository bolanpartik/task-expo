import NavBar from "./components/NavBar"
import AddTodo from './components/AddTodo'
import { useRef, useState } from "react"
import TodoCard from "./components/TodoCard"

function App() {

  const todoRef = useRef(0)
  const [allTodos, setAllTodos] = useState([])

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black min-h-dvh max-h-dvh text-customCyan">
      <NavBar />
      <div className="flex justify-center w-full items-center flex-col">
        <AddTodo
            setAllTodos={setAllTodos}
            todoRef={todoRef}
        />
        <TodoCard
            allTodos={allTodos}
            setAllTodos={setAllTodos}
            todoRef={todoRef}
        />
      </div>
    </div>
  )
}

export default App
