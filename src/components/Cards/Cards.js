import React from 'react'
import Card from './Card'
import { faAngular, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons'

const Cards = () => {
  return (
        <div className='grid xl:grid-cols-3 grid-cols-1 gap-10 my-6'>
            <Card icon={faAngular} title={'Angular 11+'} description={[
              'Human Resource Management System',
              'Property Management System',
            ]}></Card>
            <Card icon={faReact} title={'React'} description={[
              'Air Cargo Application Platform',
              'Online Store Product Management Platform'
            ]}></Card>
            <Card icon={faWordpress} title={'Wordpress'} description={[
              'RichFame Home website',
              'AAS Education Consultancy website'
            ]}></Card>
        </div>
  )
}

export default Cards