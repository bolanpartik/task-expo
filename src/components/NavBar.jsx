import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

export default function NavBar({ mode, setMode }){

    const handleTheme = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className={`h-16 flex justify-between items-center backdrop-blur-xl sticky top-0 z-10 border-b transition-all 
            ${mode === 'dark'
                ? 'bg-black/30 text-customCyan border-customGray'
                : 'bg-white/10 text-gray-900 border-gray-300 shadow'}`}>

            <div className='flex items-center ml-2 sm:ml-8'>
                <p className={`text-2xl sm:text-3xl font-black sm:font-bold ${mode === 'dark' ? 'text-customCyan' : 'text-gray-900'}`}>
                    Todo-Expo
                </p>
            </div>

            <div className='flex text-sm sm:text-base gap-2 sm:gap-5 items-center mr-2 sm:mr-6'>
                <button
                    onClick={handleTheme}
                    className={`rounded-full p-1 sm:p-2 transition-all
                    ${mode === 'dark' ? 'hover:bg-hoverShade' : 'hover:bg-gray-300'}
                    hover:animate-jump`}>
                    {mode === 'dark' ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
                </button>

                <NavLinks title='Home' mode={mode}/>
                <NavLinks title='Contact' mode={mode}/>
                <NavLinks title='Support' mode={mode}/>
                <NavLinks title='About' mode={mode}/>
            </div>
        </div>
    );
}

function NavLinks({title,mode}){
    return(
        <a href='#' className={`underline-offset-4 hover:underline hover:scale-110 transition-all
            ${mode === 'dark' ? 'decoration-yellow-500 text-customCyan' : 'decoration-yellow-900 text-gray-900'}`}>
            {title}
        </a>
    )
}