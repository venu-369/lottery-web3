import React from 'react'

interface Props {
    title?: string;
}

const NavButton = ({title}: Props) => {
  return (
   <button className='bg-[#036756] text-white py-2 px-4 rouded'>
    {title}
   </button>
  )
}

export default NavButton
