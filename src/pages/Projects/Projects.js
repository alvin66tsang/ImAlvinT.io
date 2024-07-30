import React from 'react'
import RichFamePMS from '../../assets/pms.png'
import RichFameClearance from '../../assets/clearance.png'
import AASHK from '../../assets/aashk.png'
import AASMO from '../../assets/aasmo.png'
import HRMS from '../../assets/flexsystem_hrms.jpg'
import Project from './Project'

const Projects = () => {

  const projects = [
    {
      imgSrc: RichFamePMS,
      title: 'Product Management Platform',
      content: 'Tech. Stack: PHP, Laravel, HTML, CSS, JavaScript, MySQL',
      reverse: false
    },
    {
      imgSrc: RichFameClearance,
      title: 'Clearance System',
      content: 'Tech. Stack: React, Redux, Antd, PHP, Laravel, MySQL, RESTful API',
      reverse: true
    },
    {
      imgSrc: HRMS,
      title: 'Human Resources Management System',
      content: 'Tech. Stack: Angular 11, ISAM, C#, TortoiseSVN, MySQL, Linq, Jira',
      reverse: false
    },
    {
      imgSrc: AASHK,
      title: 'AAS Education Consultancy (Hong Kong)',
      content: 'Tech. Stack: WordPress, PHP, HTML, CSS, JavaScript',
      reverse: true
    },
    {
      imgSrc: AASMO,
      title: 'AAS Education Consultancy (Macau)',
      content: 'Tech. Stack: Ruby on Rails, Bootstrap 5, Git, Postgresql, AWS',
      reverse: false
    },
  ]

  return (
    <div  id='projects' className='py-20 min-h-[550px] bg-gradient-to-b from-blue-200 via-purple-100 to-pink-50'>
      <div className='text-6xl font-bold pb-8 text-center'>My Projects</div>
      {
        projects.map(({imgSrc, title, content, reverse}) => (
          <Project imgSrc={imgSrc} title={title} content={content} reverse={reverse}/>
        ))
      }
    </div>
  )
}

export default Projects