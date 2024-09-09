import { SquarePen } from 'lucide-react'
import { Trash2 } from 'lucide-react';
import { useEffect, useState } from "react"

export default function TodoItem({ allTodos, id, setAllTodos }) {

    const [currTodo, setCurrTodo] = useState(allTodos.find(t => t.id ==id))
    const [isTodoCompleted, setIsTodoCompleted] = useState(currTodo.isCompleted)

    const handleEdit = () => {

        const res = prompt('Enter the edited task.')
        if (res == null || res == '') {
            alert('Enter a valid Todo')
        }
        else {
            setCurrTodo((prev) => ({ ...prev, title: res }))
        }
    }

    useEffect(() => {
        setCurrTodo((prevTodo) => ({ ...prevTodo, isCompleted: isTodoCompleted }));
    }, [isTodoCompleted]);

    const handleChange = () => {
        setIsTodoCompleted(prev => !prev)
    }

    const handleDelete = () => {
        setAllTodos([...allTodos].filter(t => {
            return t.id !== currTodo.id
        }))
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={isTodoCompleted}
                onChange={handleChange}
            />
            <p>{currTodo.title}</p>
            <SquarePen
                onClick={handleEdit}
            />
            <Trash2
                onClick={handleDelete}
            />
        </div>
    )
}