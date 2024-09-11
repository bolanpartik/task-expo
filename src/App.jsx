import NavBar from "./components/NavBar"
import AddTodo from './components/AddTodo'
import { useRef, useState } from "react"
import TodoCard from "./components/TodoCard"

function App() {

  const todoRef = useRef(0)
  const [allTodos, setAllTodos] = useState([])
  const [mode,setMode]=useState('dark')

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black min-h-dvh text-customCyan select-none">
      <NavBar mode={mode} setMode={setMode}/>
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
