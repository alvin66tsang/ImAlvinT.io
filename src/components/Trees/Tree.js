import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Tree = ({ year, company, position, description, defaultOpen=false}) => {

  const [clicked, setClicked] = useState(defaultOpen)

  const toggleDisplay = () => {
    setClicked(!clicked)
  }

  return (
    <>
    
        <div className='invisible h-0 md:visible md:h-fit grid grid-cols-2 divide-x divide-gray-200'>
            <div className='p-6 font-bold '>
                <div className='text-2xl text-center text-red-400'>{year}</div>
            </div>
            <div className='p-6'>
                <div className='flex-col'>
                    <div className='text-2xl bg-gradient-to-b from-purple-500 to-blue-400 bg-clip-text text-transparent'>{position}</div>
                    <div className='text-sm mt-2'>{company}</div>
                    <button className='my-4 w-1/4 px-1 text-start flex items-center' onClick={toggleDisplay}>
                        <FontAwesomeIcon icon={clicked? faAngleUp : faAngleDown} size={'lg'} className='text-blue-200'/>
                        <span className='px-4'>{clicked? '' : 'Expand'}</span>
                    </button>
                    <ul className={`list-outside list-disc p-4 rounded-md ${clicked? 'h-fit scale-y-100' : 'h-0 scale-y-0'} transition-all`}>
                    {
                        description.map((desc, i) => {
                            return (
                                <li key={i} className='font-normal'>{desc}</li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
        

        {/* Mobile version */}
        <div className='visible h-fit md:invisible md:h-0 grid grid-cols-1 divide-y divide-gray-200'>
            <div className='p-6 font-bold '>
                <div className='text-2xl text-center text-red-400'>{year}</div>
            </div>
            <div className='p-6'>
                <div className='flex-col'>
                    <div className='text-2xl bg-gradient-to-b from-purple-500 to-blue-400 bg-clip-text text-transparent'>{position}</div>
                    <div className='text-sm mt-2'>{company}</div>
                    <button className='my-4 w-1/4 px-1 text-start flex items-center' onClick={toggleDisplay}>
                        <FontAwesomeIcon icon={clicked? faAngleUp : faAngleDown} size={'lg'} className='text-blue-200'/>
                        <span className='px-4'>{clicked? '' : 'Expand'}</span>
                    </button>
                    <ul className={`list-outside list-disc p-4 rounded-md ${clicked? 'h-fit scale-y-100' : 'h-0 scale-y-0'} transition-all`}>
                    {
                        description.map((desc, i) => {
                            return (
                                <li key={i} className='font-normal'>{desc}</li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tree