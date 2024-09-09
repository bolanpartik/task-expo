import { useState } from "react"

export default function TodoItem({ allTodos, id, setAllTodos }) {
    
    const [currTodo, setCurrTodo] = useState(allTodos.find(t => t.id ==id))

    return (
        <div >
            Todo Item
        </div>
    )
}