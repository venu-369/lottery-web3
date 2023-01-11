import React from 'react'

interface Props {
    title: string
}

const NavButton = ({title}) => {
  return (
   <button>
    {title}
   </button>
  )
}

export default NavButton
