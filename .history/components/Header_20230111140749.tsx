import React from 'react'
import NavButton from './NavButton';

const Header = () => {
  return (
    <div >
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
     <div>
        <div className='bf-[#0a1f1c]'>
        <NavButton />
        <NavButton />
        </div>
     </div>
    </div>
  );
}

export default Header
