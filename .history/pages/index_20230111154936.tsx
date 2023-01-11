
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

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading} = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);
  console.log(address);

  
 

  if(isLoading) return <Loading />
  if(!address) return (<Login />)

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
