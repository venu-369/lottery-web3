
import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../components/Login'
import PropagateLoader from 'react-spinners/PropagateLoader';

import Header from '../components/Header'
import {
  useContract,
  useMetamask,
  useDisconnect,
  useAddress,
  useContractData,
  useContractCall,

  
} from '@thirdweb-dev/react'

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading} = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);
  console.log(address);

  
  if(!address) return (<Login />)

  if(isLoading) return (
    <div className='bg-[#091b18] h-screen flex flex-col items-center justify-center'>
      <div className='flex items-center space-x-2 mb-10'>
        <img className='rounded-full h-20 w-20' src="https://i.pinimg.com/564x/93/93/41/93934128ae88668f93c1abaaf1e62b1b.jpg" alt=""/>
        <h1 className='text-lg text-white font-bold'>Loading the VGM Lottery Draw</h1>
      </div>
      <PropagateLoader color="white"/>
    </div>
  )


  return (
    <div className="bg-[#091818] min-h-screen flex flex-col">
      <Head>
        <title>VGM Lottery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      
    </div>
  )
}

export default Home
