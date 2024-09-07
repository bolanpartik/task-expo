export default function NavBar(){
    return(
        <div className='h-16 flex justify-between bg-black/30 backdrop-blur-xl text-customCyan border-b border-customGray'>
            <div className='flex items-center ml-8'>
                <p className='text-3xl font-bold'>Todo-Expo</p>
            </div>
            <div className='flex gap-5 items-center mr-6'>
                <a href='#' className='underline-offset-4 hover:underline hover:scale-110 decoration-yellow-500 transition-all'>Home</a>
                <a href='#' className='underline-offset-4 hover:underline hover:scale-110 decoration-yellow-500 transition-all'>Contact</a>
                <a href='#' className='underline-offset-4 hover:underline hover:scale-110 decoration-yellow-500 transition-all'>Support</a>
                <a href='#' className='underline-offset-4 hover:underline hover:scale-110 decoration-yellow-500 transition-all'>About</a>
            </div>
        </div>
    )
}