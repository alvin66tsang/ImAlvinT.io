import React from 'react'
import Cards from '../../components/Cards/Cards'

const Skills = () => {
  return (
    <section id='skills' className='min-h-[550px] m-32 font-bold grid items-center '>
        <div className='text-xl'>My Skills</div>
        <div className='text-6xl mb-4'>My Expertise</div>
        <Cards />
    </section>
  )
}

export default Skills