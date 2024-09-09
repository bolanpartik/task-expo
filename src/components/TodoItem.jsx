import { CheckCheck } from 'lucide-react'
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
        <div className="flex bg-customGray w-full rounded-md p-3 justify-between transition-all duration-300 hover:outline outline-1 outline-blue-600 items-center">
            <div className="flex ml-3 gap-3 w-1/2">
                <input
                    type="checkbox"
                    checked={isTodoCompleted}
                    onChange={handleChange}
                    className="w-4 accent-green-500 transition-all"
                />
                <p className="text-lg font-medium w-full transition-all">{currTodo.title}</p>
            </div>

            {isTodoCompleted && <CheckCheck className="text-green-500"/>}

            <div className="flex w-1/4 justify-between">
                <SquarePen
                    onClick={handleEdit}
                    className="hover:text-green-500 hover:scale-95"
                />
                <Trash2
                    onClick={handleDelete}
                    className="mr-3 hover:text-red-600 hover:scale-95"
                />
            </div>
        </div>
    )
}