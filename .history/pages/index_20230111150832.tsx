
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {
  useContract,
  useMetamask,
  useDisconnect,
  useAddress,
  useContractData,
  useContractCall
} from '@thirdweb-dev/react'

const Home: NextPage = () => {
  const address = useAddress()


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
