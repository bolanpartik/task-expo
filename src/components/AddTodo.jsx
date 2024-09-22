import { useEffect, useState } from "react";

export default function AddTodo({ setAllTodos, todoRef, mode }) {

    const getTodayDate = () => {
        return new Date().toISOString().slice(0, 10);
    }

    const getCurrTime = () => {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    }

    const [userInput, setUserInput] = useState('');
    const [userDate, setUserDate] = useState(getTodayDate());
    const [userTime, setUserTime] = useState(getCurrTime());
    const [minTime, setMinTime] = useState(getCurrTime());

    const handleTimeChange = (event) => {
        setUserTime(event.target.value);
    }

    const handleDateChange = (event) => {
        setUserDate(event.target.value);
    }

    const handleAddTodo = () => {

        if (userInput == null || userInput === '') {
            alert('Please enter a valid Todo.');
            return;
        }

        if (userDate == null || userDate === '') {
            alert('Please enter a valid date.');
            return;
        }else if(userDate<getTodayDate()){
            alert("Can't add past task.")
            return;
        }

        if (userDate === getTodayDate() && userTime <= minTime) {
            if(userTime === minTime){
                alert('Please enter a time that is later than the current time.')
            }else{
                alert('Please enter a valid time. You cannot add a past task.');
            }
            return;
        }

        setAllTodos(prevTodos => [
            ...prevTodos, {
                title: userInput,
                id: todoRef.current,
                isCompleted: false,
                dueDate: userDate,
                dueTime: userTime
            }
        ]);
        setUserTime(getCurrTime());
        setUserDate(getTodayDate());
        todoRef.current += 1;
        setUserInput('');
    };

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    }

    useEffect(() => {

        const timer = setInterval(() => {
            setMinTime(getCurrTime());
            setUserTime(getCurrTime());
        }, 60000);

        return () => clearInterval(timer);

    }, []);

    return (
        <div className="flex flex-col items-center gap-5 mt-5">
            <p className="text-xl sm:text-3xl">New Task Entry</p>
            <div className="flex gap-4 flex-col md:flex-row">
                <TitleInput userInput={userInput} handleInputChange={handleInputChange} mode={mode} />
                <DateInput userDate={userDate} handleDateChange={handleDateChange} mode={mode} />
                <TimeInput userTime={userTime} handleTimeChange={handleTimeChange} minTime={minTime} mode={mode} />
                <button
                    onClick={handleAddTodo}
                    className={`p-2 px-4 border-none outline-none rounded-md shadow hover:shadow-sm focus:animate-jump focus:animate-duration-500
                    ${mode === "dark"
                        ? "bg-black text-customCyan hover:shadow-white"
                        : "bg-sky-600 text-white hover:bg-sky-700 hover:shadow-black"}`}
                >
                    Add Todo
                </button>
            </div>
        </div>
    );
}


function TitleInput({userInput,handleInputChange,mode}){
    return(
        <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            className={`h-10 w-60 sm:w-80 rounded-lg ring-2 px-2 focus:outline-none focus:ring-2 focus:ring-sky-600
            ${mode === "dark"
                ? "bg-customDarkGray ring-gray-700 text-white focus:bg-customBlack"
                : "bg-gray-100 ring-gray-400 text-gray-900 focus:bg-white"}`}
            placeholder="Enter your task"
        />
    )
}

function DateInput({userDate,handleDateChange,mode}){
    return(
        <input
            type="date"
            value={userDate}
            onChange={handleDateChange}
            min={new Date().toISOString().slice(0, 10)}
            className={`px-3 w-60 sm:w-auto py-1 rounded-lg ring-2 focus:outline-none focus:ring-sky-600
            ${mode === "dark"
                ? "bg-customDarkGray ring-gray-700 text-white"
                : "bg-gray-100 ring-gray-400 text-gray-900"}`}
        />
    )
}

function TimeInput({userTime, handleTimeChange, minTime, mode}){
    return(
        <input
            type="time"
            value={userTime}
            onChange={handleTimeChange}
            min={minTime}
            className={`px-3 w-60 sm:w-auto py-1 rounded-lg ring-2 focus:outline-none focus:ring-sky-600
            ${mode === "dark"
                ? "bg-customDarkGray ring-gray-700 text-white"
                : "bg-gray-100 ring-gray-400 text-gray-900"}`}
        />
    )
}