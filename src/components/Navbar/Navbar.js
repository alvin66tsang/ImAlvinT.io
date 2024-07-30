import React, { useState } from 'react'
import NavbarItem from './NavbarItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons/faCloud'
import { faNavicon, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const menuItems = [
    {
      name: 'Home',
      link: 'home',
    },
    {
      name: 'Skills',
      link: 'skills',
    },
    {
      name: 'Resume',
      link: 'resume',
    },
    {
      name: 'Projects',
      link: 'projects',
    },
    {
      name: 'Contact',
      link: 'contact',
    },
  ]

  const [showMenu, setShowMenu] = useState(false)
  const [currentItem, setCurrentItem] = useState('home')

  const toggleMenu = () => {
      setShowMenu(!showMenu)
  }

  const setClickedItem = (item) => {
    setCurrentItem(item)
  }

  return (
    <nav className='navbar p-4 bg-neutral-800 text-white sticky top-0 z-50 shadow-lg'>
        <div className='invisible h-0 md:visible md:h-fit flex justify-between'>
            <FontAwesomeIcon icon={faCloud} className='fa-lg'/>
            <ul className='flex justify-evenly cursor-pointer gap-8'>
              {
                menuItems.map((item, i) => (
                  <NavbarItem key={i} name={item.name} link={item.link} currentItem={currentItem} setCurrentItem={setClickedItem} toggleMenu={toggleMenu} />
                ))
              }
            </ul>
        </div>
        {/* Mobile version */}
        <div className='visible h-full md:invisible md:h-0'>
          <div className='flex justify-between'>
            <FontAwesomeIcon icon={faCloud} className='fa-lg'/>
            <FontAwesomeIcon icon={showMenu? faXmark : faNavicon} className='fa-lg cursor-pointer' onClick={toggleMenu} />
          </div>
          <ul className={`text-center cursor-pointer transition-all delay-0 ${showMenu? 'mt-4 h-30 scale-y-100' : 'h-0 opacity-0 invisible scale-y-0'}`}>
            {
              menuItems.map((item, i) => (
                <NavbarItem key={i} name={item.name} link={item.link} currentItem={currentItem} setCurrentItem={setClickedItem} toggleMenu={toggleMenu} />
              ))
            }
          </ul>
        </div>
    </nav>
  )
}

export default Navbar