import { useState } from "react";

export default function AddTodo({ setAllTodos, todoRef }) {

    const [userInput, setUserInput] = useState('');

    const handleAddTodo = () => {

        if (userInput == null || userInput === '') {
            alert('Please enter a valid Todo.');
            return;
        }

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

    const handleInputChange = (event) => {
        setUserInput(event.target.value)
    }

    return (
        <div className="flex flex-col items-center gap-5 mt-5">
            <p className="text-3xl">New Task Entry</p>
            <div className="flex gap-4">
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    className="bg-customDarkGray h-10 w-80 rounded-lg ring-2 px-2 ring-gray-700 focus:placeholder:opacity-40 focus:ring-sky-600 focus:outline-none focus:bg-customBlack"
                    placeholder="Enter your task"
                />
                <button
                    onClick={handleAddTodo}
                    className="bg-black p-2 px-4 border-none outline-none text-customCyan rounded-md shadow hover:shadow-white/30"
                    >Add Todo
                </button>
            </div>
        </div>
    );
}