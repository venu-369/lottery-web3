import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>VGM Lottery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <h1> Lets build a lotetry web3 dapp</h1>

      

      
    </div>
  )
}

export default Home
