import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='min-h-[20rem] pt-20 md:py-20 font-bold items-center justify-center bg-footer bg-cover bg-no-repeat opacity-85'>
        <div className='grid grid-rows-1 grid-cols-1 lg:grid-cols-2'>
          <div className='text-white text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
            <h1 className='text-9xl'>Let's Talk</h1>
          </div>
          <div className='flex flex-col flex-wrap text-white lg:m-0 m-16'>
            <div className='flex flex-wrap justify-center text-white gap-16'>
              <a href="https://www.linkedin.com/in/at0606" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size={'2xl'} />
              </a>
              <a href="https://github.com/alvin66tsang" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size={'2xl'} />
              </a>
            </div>
            <div className='flex flex-wrap justify-center mt-16 gap-16 text-center'> 
              <div>
                <p className='text-lg text-neutral-500'>Mobile</p>
                <p>+1 (437)-268-3601</p>
              </div>
              <div>
                <p className='text-lg text-zinc-500'>Address</p>
                <p>Mississauga, Ontario, Canada</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact