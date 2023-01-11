
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
      <div>
        <div>
          <h1>The Next Draw</h1>

        </div>
      </div>

      {/*The price per ticket box */}
      <div>

      </div>
      
    </div>
  )
}

export default Home
