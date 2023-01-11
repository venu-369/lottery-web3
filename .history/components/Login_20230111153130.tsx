import { useMetamask } from '@thirdweb-dev/react'
import React from 'react'

const Login = () => {
    const connectWithMetamask = useMetamask();
  return (
    <div className='bg-[#091b18] min-h-screen flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col items-center mb-10'>
            <img className='rounded-full h-56 w-56 mb-10' src="https://i.pinimg.com/564x/93/93/41/93934128ae88668f93c1abaaf1e62b1b.jpg" alt=""/>
            <h1 className='text-6xl text-white font-bold'>VGM Lottery Draw</h1>
            <h2 className='text-white'>Get Started by logging in with your metamask</h2>
            <button className='bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold'>Login with Metamask</button>
        </div>
    </div>
  )
}

export default Login