import { useState } from "react";
import TodoItem from "./TodoItem"

export default function TodoCard({ allTodos, setAllTodos, todoRef }) {

    const [searchInput,setSearchInput]=useState('')
    const [filteredTodos,setFilteredTodos]=useState([])

    const todosToDisplay = searchInput ? filteredTodos : allTodos;

    const handleSearchChange=(event)=>{
        const searchTerm=event.target.value;
        setSearchInput(searchTerm)

        const filteredItems = allTodos.filter((t) =>
            t.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTodos(filteredItems);
    }

    const completedTodos = allTodos.filter(t => {
        return t.isCompleted
    })

    const handleCompleted = () => {
        setAllTodos([...allTodos].filter(t => {
            return !t.isCompleted
        }))
    }

    const handleDeleteAll = () => {
        todoRef.current = 0
        setAllTodos([])
    }

    return (
        <div className="flex flex-col justify-center w-1/2 p-3 items-center mt-5 bg-black/40 gap-4 rounded-lg">
            {allTodos.length > 0 ?
                <div className="flex justify-between w-full px-4">
                    <p className="w-2/3">Your Tasks </p>
                    <input
                        type="text"
                        value={searchInput}
                        onChange={handleSearchChange}
                        placeholder="Search"
                    />
                        <button
                            className="outline-none border-none hover:bg-customGray rounded-sm px-1 disabled:cursor-not-allowed"
                            disabled={completedTodos.length<=0}
                            onClick={handleCompleted}>Delete Completed
                        </button>
                    <button
                        className="outline-none border-none hover:bg-customGray rounded-sm px-1"
                        onClick={handleDeleteAll}>Delete All
                    </button>
                </div>
                : <p>Currently No tasks available.</p>
            }
            {todosToDisplay.map((todo) => {
                return <TodoItem
                    key={todo.id}
                    allTodos={allTodos}
                    setAllTodos={setAllTodos}
                    id={todo.id}
                />
            })
            }
        </div>
    )
}