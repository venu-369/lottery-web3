import React from 'react'
import {useContract, useContractRead} from '@thirdweb-dev/react'

function CountdownTimer() {
    const { contract} = useContract(
        process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
    );
  return (
    <div>CountdownTimer</div>
  )
}

export default CountdownTimer