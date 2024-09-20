import NavBar from "./components/NavBar"
import AddTodo from './components/AddTodo'
import { useRef, useState } from "react"
import TodoCard from "./components/TodoCard"

function App() {

  const todoRef = useRef(0)
  const [allTodos, setAllTodos] = useState([])
  const [mode, setMode] = useState('dark')

  return (
    <div className={`${mode === "dark"
                      ? "bg-gradient-to-b from-gray-800 to-black text-customCyan"
                      : "bg-gradient-to-b from-gray-200 to-gray-600 text-gray-900"}
                      h-full min-h-dvh max-h-dvh overflow-x-hidden select-none`}>
      <NavBar mode={mode} setMode={setMode}/>
      <div className="flex justify-center w-full items-center flex-col">
        <AddTodo
            setAllTodos={setAllTodos}
            todoRef={todoRef}
            mode={mode}
        />
        <TodoCard
            allTodos={allTodos}
            setAllTodos={setAllTodos}
            todoRef={todoRef}
            mode={mode}
        />
      </div>
    </div>
  )
}

export default App
