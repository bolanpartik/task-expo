import { useState } from "react";

export default function AddTodo({ setAllTodos, todoRef }) {

    const [userInput, setUserInput] = useState('');

    const handleAddTodo = () => {
        
        setAllTodos(prevTodos => [
            ...prevTodos, {
                title: userInput,
                id: todoRef.current,
                isCompleted: false
            }
        ]);
        
        todoRef.current += 1;
        setUserInput('');
    };

    const handleInputChange=(event)=>{
        setUserInput(event.target.value)
    }

    return (
        <div>
            <p>New Task Entry</p>
            <div>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Enter your task"
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </div>
    );
}
