import React from 'react'
import {
    StarIcon,
    CurrencyDollarIcon,
    ArrowPathIcon,
    ArrowUturnDownIcon,
} from '@heroicons/react/24/solid'
import { useContract } from '@thirdweb-dev/react'

import {
    useContractRead,
    useContractWrite,
} from '@thirdweb-dev/react'


function AdminControls() {

    const {contract, isLoading} = useContract(
        process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
    );



  return (
    <div className='text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border'>
        <h2 className='font-bold'>Admin Controls</h2>
        <p className='mb-5'>Total Commision to be withdrawn:...</p>
        <div className='flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
            <button className='admin-button'>
                <StarIcon className='h-6 mx-auto mb-2' />
                Draw Winner</button>
            <button className='admin-button'>
                <CurrencyDollarIcon className="h-6 mx-auto mb-2" />
                Withdraw Commission</button>
            <button className='admin-button'>
                <ArrowPathIcon className='h-6 mx-auto mb-2' />
                Restart Draw</button>
            <button className='admin-button'>
                <ArrowUturnDownIcon className='h-6 mx-auto mb-2'/>
                Refund All</button>
        </div>
    </div>
  )
}

export default AdminControls