import TodoItem from "./TodoItem"

export default function TodoCard({ allTodos, setAllTodos,todoRef}) {

    const handleDeleteAll = () => {
        todoRef.current=0
        setAllTodos([])
    }

    return (
        <div>
            {allTodos.length > 0 ?
                <div>
                    <p>Your Tasks </p>
                    <button
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