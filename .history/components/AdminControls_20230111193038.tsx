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
            <button>Draw Winner</button>
            <button>Withdraw Commission</button>
            <button>Restart Draw</button>
            <button>Refund All</button>
        </div>
    </div>
  )
}

export default AdminControls