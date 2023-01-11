import React from 'react'

interface Props {
    title?: string
}

const NavButton = ({title}: Props) => {
  return (
   <button className='bg-[#036756]'>
    {title}
   </button>
  )
}

export default NavButton
