import { Link } from 'react-router-dom'

import img500 from './assets/500.svg'

const ServerError = () =>{
    return(
        <div className='w-screen h-screen flex flex-col items-center justify-center bg-gray-300 dark:bg-red-400'>
      <img src={img500} className='w-[450px] h-[450px] '/>
      <h1 className='text-[50px] font-bold dark:text-slate-200'>Something has gone seriously wrong</h1>
      <p className='text-[20px] dark:text-slate-200'>It's always time for a coffee break. We should be back by the time you finish your coffee.</p>
      <Link to="/dashboard" className="mt-4 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full">
          Go Back Dashboard
        </Link>
    </div>
    )
}

export default ServerError