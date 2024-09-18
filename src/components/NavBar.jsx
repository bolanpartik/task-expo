import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

export default function NavBar({mode,setMode}){

    const handleTheme=()=>{
        if(mode=='dark'){
            setMode('light')
        }else{
            setMode('dark')
        }
    }

    return(
        <div className='h-16 flex justify-between bg-black/30 backdrop-blur-xl text-customCyan border-b border-customGray sticky top-0 z-10'>
            <div className='flex items-center ml-8'>
                <p className='text-3xl font-bold'>Todo-Expo</p>
            </div>
            <div className='flex gap-5 items-center mr-6'>
                <button
                    onClick={handleTheme}
                    className='rounded-full p-2 transition-all hover:bg-hoverShade hover:animate-jump'>
                        {mode=='dark'?<Sun/>:<Moon/>}
                </button>
                <a href='#' className='underline-offset-4 hover:underline hover:scale-110 decoration-yellow-500 transition-all'>Home</a>
                <a href='#' className='underline-offset-4 hover:underline hover:scale-110 decoration-yellow-500 transition-all'>Contact</a>
                <a href='#' className='underline-offset-4 hover:underline hover:scale-110 decoration-yellow-500 transition-all'>Support</a>
                <a href='#' className='underline-offset-4 hover:underline hover:scale-110 decoration-yellow-500 transition-all'>About</a>
            </div>
        </div>
    )
}