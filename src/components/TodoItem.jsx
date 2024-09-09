import { useState } from "react"

export default function TodoItem({ allTodos, id, setAllTodos }) {

    const [currTodo, setCurrTodo] = useState(allTodos.find(t => t.id ==id))
    const [isTodoCompleted, setIsTodoCompleted] = useState(currTodo.isCompleted)
    
    const handleChange = () => {
        setIsTodoCompleted(prev => !prev)
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={isTodoCompleted}
                onChange={handleChange}
            />
            <p>{currTodo.title}</p>
        </div>
    )
}