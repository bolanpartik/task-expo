import NavBar from "./components/NavBar"
import AddTodo from './components/AddTodo'
import { useState } from "react"

function App() {

  const [allTodos, setAllTodos] = useState([])

  return (
    <div>
      <NavBar />
      <AddTodo setAllTodos={setAllTodos} />
    </div>
  )
}

export default App
