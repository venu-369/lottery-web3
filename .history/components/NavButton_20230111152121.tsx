import React from 'react'

interface Props {
    title?: string;
    isActive?: boolean;
    onClick?:() => void;
}

const NavButton = ({title, isActive, onClick}: Props) => {
  return (
   <button className={`${isActive && "bg-[#036756]"} hover:bg-[#036756] text-white py-2 px-4 rouded font-bold`}>
    {title}
   </button>
  )
}

export default NavButton
