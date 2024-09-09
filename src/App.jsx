import NavBar from "./components/NavBar"
import AddTodo from './components/AddTodo'
import { useRef, useState } from "react"
import TodoCard from "./components/TodoCard"

function App() {

  const todoRef = useRef(0)
  const [allTodos, setAllTodos] = useState([])

  return (
    <div>
      <NavBar />
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
  )
}

export default App
