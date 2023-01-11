import React from 'react'
import {useContract, useContractRead} from '@thirdweb-dev/react'
import Countdown from 'react-countdown';

type Props = {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

function CountdownTimer() {
    const { contract} = useContract(
        process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
    );
    const { data: expiration, isLoading: isLoadingExpiration} = useContractRead(
        contract, "expiration",
    );

    const renderer = ({hours, minutes, seconds, completed}: Props) => {
        if(completed) {
            return(
            <div>
                <h2>
                    Ticket sales have now CLOSED for the draw
                </h2>
            </div>
            )
        }

    }

  return (
    <div>
        <Countdown date={new Date(expiration * 1000)} renderer={renderer}/>

    </div>
  )
}

export default CountdownTimer