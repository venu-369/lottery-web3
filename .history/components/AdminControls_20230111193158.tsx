import React from 'react'
import {
    StarIcon,
    CurrencyDollarIcon,
    ArrowPathIcon,
    ArrowUturnDownIcon,
} from '@heroicons/react/24/solid'

function AdminControls() {
  return (
    <div>
        <h2>Admin Controls</h2>
        <p>Total Commision to be withdrawn:...</p>
        <div>
            <button>
                <StarIcon className='h-6 mx-auto mb-2' />
                Draw Winner</button>
            <button>
                <CurrencyDollarIcon className="h-6 mx-auto mb-2" />
                Withdraw Commission</button>
            <button>
                <ArrowPathIcon className='h-6 mx-auto mb-2' />
                

                Restart Draw</button>
            <button>Refund All</button>
        </div>
    </div>
  )
}

export default AdminControls