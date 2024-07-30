import React from 'react'
import { Link } from 'react-scroll'

const NavbarItem = ({ name, link, currentItem, setCurrentItem, toggleMenu }) => {

  return (
    <li className={`py-1 md:py-0 text-white/25 hover:text-white hover:bg-slate-700 md:hover:bg-transparent transition-colors`}>
      <Link 
        activeClass={`active text-white`}
        onClick={() => {setCurrentItem(link); toggleMenu(false)}}
        to={link} 
        spy={true} 
        smooth={true} 
        offset={-200} 
        duration={500} 
      >{name}</Link>
    </li>
  )
}

export default NavbarItem