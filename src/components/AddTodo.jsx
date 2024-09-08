import { useState } from "react";

export default function AddTodo({ setAllTodos }) {

    const [userInput, setUserInput] = useState('');

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
                <button>Add Todo</button>
            </div>
        </div>
    );
}
