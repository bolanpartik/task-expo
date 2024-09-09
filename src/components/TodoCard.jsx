import TodoItem from "./TodoItem"

export default function TodoCard({ allTodos, setAllTodos,todoRef}) {

    return (
        <div>
            <p>Your Tasks </p>
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