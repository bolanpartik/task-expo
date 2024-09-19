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
                <div className="flex justify-between w-full px-4 h-8">
                    <div className="flex w-2/3 justify-around items-center">
                        <p className="text-2xl">Your Tasks </p>
                        <input
                            type="text"
                            value={searchInput}
                            onChange={handleSearchChange}
                            placeholder="Search"
                            className="bg-customDarkGray w-auto rounded-lg px-2 text-xs h-6 transition-all focus:h-full placeholder:opacity-40 focus:outline-none"
                        />
                    </div>
                    <button
                        className="outline-none border-none hover:bg-customGray rounded-md px-1 disabled:cursor-not-allowed transition-all"
                        disabled={completedTodos.length<=0}
                        onClick={handleCompleted}>Delete Completed
                    </button>
                    <button
                        className="outline-none border-none hover:bg-customGray rounded-md px-1 transition-all"
                        onClick={handleDeleteAll}>Delete All
                    </button>
                </div>
                : <p>Currently No tasks available.</p>
            }
            {(filteredTodos.length===0 && searchInput)?
                <p>No Todo found...</p>
            :
            <>
                {todosToDisplay.map((todo) => {
                    return <TodoItem
                        key={todo.id}
                        allTodos={allTodos}
                        setAllTodos={setAllTodos}
                        id={todo.id}
                        searchInput={searchInput}
                        />
                    })
                }
            </>
            }
        </div>
    )
}