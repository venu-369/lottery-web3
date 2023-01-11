import React from 'react'
import NavButton from './NavButton';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5' >
        <div className="flex items-center space-x-2">
            <img 
             className='rounded-full h-20 w-20'
             src="https://i.pinimg.com/564x/93/93/41/93934128ae88668f93c1abaaf1e62b1b.jpg"
             alt=""
             />
        
        <div>
            <h1 className='text-lg text-white font-bold'>VGM DRAW</h1>
            <p className='text-xs text-emerald-500 truncate'>User...</p>
        </div>
     
     </div>
     <div className='hidden md:flex md:col-span-3 items-center justify-center rounded-md'>
        <div className='bf-[#0a1f1c] p-4 space-x-2'>
        <NavButton isActive title="Buy Tickets"/>
        <NavButton title="Logout"/>
        </div>
     </div>

     <div className='flex flex-col ml-auto text-right'>
        <Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer'/>

     </div>
    </header>
  );
}

export default Header
