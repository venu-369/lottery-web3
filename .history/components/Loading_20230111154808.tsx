import React from 'react'
import { PropagateLoader } from 'react-spinners';

function Loading() {
  return (
    <div className='bg-[#091b18] h-screen flex flex-col items-center justify-center'>
      <div className='flex items-center space-x-2 mb-10'>
        <img className='rounded-full h-20 w-20' src="https://i.pinimg.com/564x/93/93/41/93934128ae88668f93c1abaaf1e62b1b.jpg" alt=""/>
        <h1 className='text-lg text-white font-bold'>Loading the VGM Lottery Draw</h1>
      </div>
      <PropagateLoader color="white" size={30}/>
    </div>
  );
}

export default Loading
