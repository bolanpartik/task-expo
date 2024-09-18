import { CheckCheck } from 'lucide-react'
import { SquarePen } from 'lucide-react'
import { Trash2 } from 'lucide-react';
import { useEffect, useState } from "react"

export default function TodoItem({ allTodos, id, setAllTodos }) {

    const [currTodo, setCurrTodo] = useState(allTodos.find(t => t.id ==id))
    const [isTodoCompleted, setIsTodoCompleted] = useState(currTodo.isCompleted)
    const [isDeleting,setIsDeleting]=useState(false)

    const checkDueDate=()=>{
        const todayDate=new Date().toISOString().slice(0,10);
        const dueDate=currTodo.dueDate;
        const nowTime=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',hour12:false})
        const dueTime=currTodo.dueTime
        if(todayDate>=dueDate){
            if(nowTime>=dueTime){
                setIsTodoCompleted(true)
            }
        }
    }

    useEffect(()=>{
        checkDueDate()
        const currentTime = new Date().getTime();
        const dueDateTime = new Date(`${currTodo.dueDate}T${currTodo.dueTime}:00`).getTime();
        const timeUntilDue = dueDateTime - currentTime;
        if(timeUntilDue>0){
            const timeOutid=setTimeout(checkDueDate,timeUntilDue)
            return ()=> clearTimeout(timeOutid)
        }
    },[currTodo])

    const handleEdit = (e) => {
        e.stopPropagation()

        const res = prompt('Enter the edited task.')
        if (res == null || res == '') {
            alert('Enter a valid Todo')
        }
        else {
            setCurrTodo((prev) => ({ ...prev, title: res }))
        }
    }

    useEffect(() => {
        setCurrTodo((prevTodo) => ({ ...prevTodo, isCompleted: isTodoCompleted }));

        const updatedTodos = allTodos.map(t =>
            t.id === currTodo.id ? {...currTodo,isCompleted:isTodoCompleted} : t
        )
        setAllTodos(updatedTodos)
    }, [isTodoCompleted]);

    const handleChange = () => {
        setIsTodoCompleted(prev => !prev)
    }

    const handleDelete = (e) => {
        e.stopPropagation()
        setIsDeleting(true)
        setTimeout(()=>{

            setAllTodos([...allTodos].filter(t => {
                return t.id !== currTodo.id
            }))
        },500)
    }

    return (
        <div className={`flex bg-customGray w-full rounded-md p-3 justify-between hover:outline outline-1 outline-blue-600 items-center ${isTodoCompleted?'opacity-60':'opacity-100'} animate-duration-1000 ${isDeleting?'animate-jump-out':'animate-jump-in'} `} onClick={handleChange}>
            <div className="flex gap-3 w-2/3 items-center">
                <p className={`text-lg font-medium w-2/3 transition-all ${isTodoCompleted?'line-through':'no-underline'}`}>{currTodo.title}</p>
                <p className='w-1/4'>{currTodo.dueDate}</p>
                <p >{currTodo.dueTime}</p>
            </div>

            {isTodoCompleted && <CheckCheck className="text-green-500"/>}

            <div className="flex w-1/5 justify-between">
                <SquarePen
                    onClick={handleEdit}
                    className="hover:text-green-500 hover:scale-95"
                />
                <Trash2
                    onClick={handleDelete}
                    className="mr-3 hover:text-red-600 hover:scale-95"
                />
            </div>
        </div>
    )
}