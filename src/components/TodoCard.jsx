import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoCard({ allTodos, setAllTodos, todoRef, mode }) {

    const [searchInput, setSearchInput] = useState('')
    const [filteredTodos, setFilteredTodos] = useState([])

    const todosToDisplay = searchInput ? filteredTodos : allTodos;

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchInput(searchTerm)

        const filteredItems = allTodos.filter((t) =>
            t.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTodos(filteredItems)
    }

    const completedTodos = allTodos.filter(t => t.isCompleted)

    const handleCompleted = () => {
        setAllTodos([...allTodos].filter(t => !t.isCompleted))
    }

    const handleDeleteAll = () => {
        todoRef.current = 0
        setAllTodos([])
    }

    return (
        <div className={`flex flex-col justify-center md:w-4/5 lg:w-1/2 p-3 items-center mt-5 gap-4 rounded-lg
            ${mode === "dark" ? "bg-black/40 text-white" : "bg-gray-100 text-gray-900 shadow-md"}`}>

            {allTodos.length > 0 ?
                <div className="flex justify-between w-full px-1 sm:px-4 h-8">
                    <div className="flex w-max sm:w-7/12 md:w-2/3 md:justify-around items-center">
                        <p className="hidden sm:block md:text-2xl">Your Tasks</p>
                        <input
                            type="text"
                            value={searchInput}
                            onChange={handleSearchChange}
                            placeholder="Search"
                            className={`sm:w-auto rounded-lg px-2 text-xs h-6 transition-all focus:h-full placeholder:opacity-70 focus:outline-none
                                ${mode === "dark"
                                    ? "bg-customDarkGray text-white "
                                    : "bg-gray-200 text-gray-900 "}`}
                        />
                    </div>
                    <button
                        className={`outline-none border-none rounded-md px-1 transition-all text-xs sm:text-sm lg:text-base
                            ${completedTodos.length <= 0 ? "disabled:cursor-not-allowed" : "hover:bg-gray-500/50"}
                            ${mode === "dark" ? "hover:bg-customGray" : "hover:bg-gray-300"}`}
                        disabled={completedTodos.length <= 0}
                        onClick={handleCompleted}>
                        Delete Completed
                    </button>
                    <button
                        className={`outline-none border-none rounded-md px-1 transition-all text-xs sm:text-sm lg:text-base
                            ${mode === "dark" ? "hover:bg-customGray" : "hover:bg-gray-300"}`}
                        onClick={handleDeleteAll}>
                        Delete All
                    </button>
                </div>
             :
                <p>Currently No tasks available.</p>
             }


            {filteredTodos.length === 0 && searchInput ? 
                <p>No Todo found...</p>
            :
                <>
                    {todosToDisplay.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            allTodos={allTodos}
                            setAllTodos={setAllTodos}
                            id={todo.id}
                            mode={mode}
                        />
                    ))}
                </>
            }
        </div>
    )
}