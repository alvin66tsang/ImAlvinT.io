import React from 'react'
import myself from '../../assets/profile.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <section id='home' className='h-[55rem] grid items-center justify-items-center grid-cols-1 md:grid-cols-[2fr_1fr]'>
      <div className='flex flex-col m-5 text-slate-100 bg-gradient-to-r from-zinc-950 to-slate-800 h-full w-full items-center justify-center text-center'>
        <div className='text-6xl '>Hello,</div>
        <div className='text-7xl'>I'm <span className='text-blue-300'>Alvin</span></div>
        <div className='text-7xl bg-gradient-to-r bg-clip-text from-red-500 via-purple-700 to-pink-400 text-transparent'>Front-End Developer</div>
        
          <Link 
              to={'skills'} 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={300}
              className='w-full flex justify-center'
          >
            <button className='w-6/12 hover:bg-blue-500 mt-10 p-2 bg-blue-950 hover:text-gray-100 transition-all delay-75 flex space-x-2 items-center justify-center rounded-md border-1'>
              <div>Let's get started</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
      </div>
      <div className='flex bg-gradient-to-r from-slate-800 to-zinc-950 h-full w-full items-center justify-center text-center'>
        <div className='w-72 p-6 shadow-xl rounded-md bg-slate-100'>
          <img src={myself} alt='My selfie' className='rounded' />
          <div className='grid grid-cols-2 p-4'>
            <button className='hover:animate-pulse'>
              <a href="https://www.linkedin.com/in/at0606" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size={'2xl'} />
              </a>
            </button>
            <button className='hover:animate-pulse'>
              <a href="https://github.com/alvin66tsang" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size={'2xl'} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home