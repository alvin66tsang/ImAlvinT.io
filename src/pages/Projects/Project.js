import React from 'react'

const Project = ({imgSrc, title, content, reverse}) => {
    return (
        <>
        {
            reverse? 
            <div className='p-10 grid grid-cols-1 md:grid-cols-2 gap-16'>
                <div className='flex flex-col h-full w-full items-center justify-center'>
                    <div className='font-bold text-3xl '>{title}</div>
                    <div className='text-lg'>{content}</div>
                </div>
                <div className='p-4'>
                    <img src={imgSrc} alt='' />
                </div>
            </div>
            :
            <div className='p-10 grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='p-4'>
                    <img src={imgSrc} alt='' />
                </div>
                <div className='flex flex-col h-full w-full items-center justify-center'>
                    <div className='font-bold text-3xl '>{title}</div>
                    <div className='text-lg'>{content}</div>
                </div>
            </div>
        }
        </>
    )
}

export default Project