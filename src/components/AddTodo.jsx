import { useState } from "react";

export default function AddTodo({ setAllTodos }) {

    const [userInput, setUserInput] = useState('');

    return (
        <div>
            <p>New Task Entry</p>
            <div>
                <input
                    type="text"
                    placeholder="Enter your task"
                />
                <button>Add Todo</button>
            </div>
        </div>
    );
}
