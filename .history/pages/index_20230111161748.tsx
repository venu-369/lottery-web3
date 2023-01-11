
import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../components/Login'


import Header from '../components/Header'
import {
  useContract,
  useMetamask,
  useDisconnect,
  useAddress,
  useContractData,
  useContractCall,

  
} from '@thirdweb-dev/react'
import Loading from '../components/Loading'
import { useState } from 'react'

const Home: NextPage = () => {
  const address = useAddress();
  const [quantity, setQuantity] = useState<number>(1);
  const { contract, isLoading} = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);
  

  
 

  if(isLoading) return <Loading />
  if(!address) return (<Login />)

  return (
    <div className="bg-[#091818] min-h-screen flex flex-col">
      <Head>
        <title>VGM Lottery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/*The next draw box */}
      <div className='space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5'>
        <div className='stats-container'>
          <h1 className='text-5xl text-white font-semibold text-center'>The Next Draw</h1>

       
        <div className='flex justify-between p-2 space-x-2'>
          <div className='stats'>
            <h2 className='text-sm'>Total Pool</h2>
            <p className='text-xl'>0.1 MATIC</p>
           </div>
           <div className="stats">
            <h2 className='text-sm'>Tickets Remaining</h2>
            <p className='text-xl'>100</p>
           </div>
          </div>

          {/*Countdown timer */}
        </div>
        <div className="stats-container spce-y-2">
          <div className="state-container">
            <div className='flex justify-between items-center text-white pb-2'>
              <h2>Price per ticket</h2>
              <p>0.01 MATIC</p>
            </div>
            <div className='flex text-white items-center space-x-2 bg-[#091b18] border-[#004337] border p-4'>
              <p>TICKETS</p>
              <input 
               className='flex w-full bg-transparent text-right outline-none' 
               type="number" 
               min={1} 
               max={10} 
               value={quantity}
               onChange={e => setQuantity(Number(e.target.value))}
               />
            </div>
            <div>
              <div>
                <p>Total cost of tickets</p>
                <p>0.999</p>
              </div>
            </div>

          </div>
        </div>


      </div>

      {/*The price per ticket box */}
      <div>

      </div>
      
    </div>
  )
}

export default Home
