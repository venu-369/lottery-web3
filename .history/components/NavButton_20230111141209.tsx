import React from 'react'

interface Props {
    title?: string
}

const NavButton = ({title}: Props) => {
  return (
   <button className='bg-[#036756] text-white'>
    {title}
   </button>
  )
}

export default NavButton
