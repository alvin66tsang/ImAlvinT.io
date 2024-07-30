import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({icon, title, description}) => {
  return (
      <div className='h-[350px] py-16 px-8 grid text-black border-y-0 border-t-0 border-b-4 border-blue-300 rounded-lg 
          bg-blue-50 shadow-xl text-wrap'>
            <div className='flex items-center gap-4 mb-4'>
              <FontAwesomeIcon icon={icon} fontSize={'3rem'} className='text-white p-1 border-1 border-transparent rounded-full bg-gradient-to-r from-green-300 via-blue-300 to-purple-300'/>
              <div className='font-semibold text-3xl'>{title}</div>
            </div>
            {
              description.map((desc, i) => (
                <div key={i} className='text-lg'>{i+1}. {desc}</div>
              ))
            }
        </div>
  )
}

export default Card