import TodoItem from "./TodoItem"

export default function TodoCard({ allTodos, setAllTodos, todoRef }) {

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
                    <p>Your Tasks </p>
                    <button
                        onClick={handleCompleted}>Delete Completed
                    </button>
                    <button
                        className="outline-none border-none hover:bg-customGray rounded-sm px-1"
                        onClick={handleDeleteAll}>Delete All
                    </button>
                </div>
                : <p>Currently No tasks available.</p>
            }
            {allTodos?.map((todo) => {
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