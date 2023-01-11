import React from 'react'

const Login = () => {
  return (
    <div className='bg-[#091b18] min-h-screen flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col items-center mb-10'>
            <img className='rounded-full h-56 w-56 mb-10' src="https://i.pinimg.com/564x/93/93/41/93934128ae88668f93c1abaaf1e62b1b.jpg" alt=""/>
            <h1 className='text-6xl text-white font-bold'>VGM Lottery Draw</h1>
            <h2 className='text-white'>Get Started by logging in with your metamask</h2>
        </div>
    </div>
  )
}

export default Login