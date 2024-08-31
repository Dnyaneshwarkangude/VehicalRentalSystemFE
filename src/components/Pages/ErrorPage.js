import React from 'react';
import { Link } from 'react-router-dom';

import img404 from './assets/404.svg'

function ErrorPage() {
  return (  
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gray-300 dark:bg-red-400'>
      <img src={img404} className='w-[450px] h-[450px] '/>
      <h1 className='text-[50px] font-bold dark:text-slate-200'>Page not found</h1>
      <p className='text-[20px] dark:text-slate-200'>Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.</p>
      <Link to="/dashboard" className="mt-6 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full">
          Go Back Dashboard
        </Link>
    </div>
  );
}

export default ErrorPage;
