import React from 'react'
import Tree from './Tree'

const Trees = () => {
  return (
    <div className='mt-32'>
        <Tree defaultOpen={true} year={'2023'} position={'Web Developer'} company={'RichFame International Limited'} description={[
          'Led cross-functional teams to create user-friendly interfaces with WordPress, displaying products and services.',
          'Implemented Redux for streamlined data flow and consistent application state.',
          'Utilized Git for version control and collaborated via code reviews and pull requests.',
          'Integrated Ant Design and Material Design for a modern UI.',
          'Contributed to developing web systems, including a Product Management System and Web API Service.',
          'Enhanced PHP platform for advanced filtering, reducing import time from 1s to 0.1s.',
          'Implemented responsive design for optimal viewing on various devices.',
          'Conducted rigorous testing and debugging to maintain high-quality code standards.',
        ]} />
        <Tree defaultOpen={true} year={'2022'} position={'Full Stack Programmer'} company={'Flexsystem'} description={[
          'Upgraded Angular 1.5 web app to Angular 11, boosting performance and client satisfaction.',
          'Led development of CRM system, streamlining processes and providing real-time pricing.',
          'Implemented lazy loading in Angular components for better performance.',
          'Developed RESTful APIs with ASP.NET MVC 5 and Entity Framework, enhancing data efficiency.',
          'Managed front-end and back-end patch management for servers.',
          'Integrated third-party APIs, improving system functionality and user experience.',
          'Sanitized and imported third party datasets into SQL databases.',
          'Modernized design with CSS3 Grid and Flexbox in Angular, improving responsiveness for website integration.',
        ]} />
        <Tree defaultOpen={true} year={'2021'} position={'Web Developer'} company={'AAS Education Consultancy'} description={[
          'Modernized design and improved mobile responsiveness using Bootstrap 5, HTML, CSS, and JavaScript, reducing webpage loading speed from 30s to 5s.',
          'Integrated an online application form with ZohoCRM, enhancing registration efficiency and reducing data entry time.',
          'Implemented SEO best practices to improve website visibility and search engine rankings.',
          'Developed and maintained RESTful APIs for seamless data exchange between web applications.',
          'Formulated a standardized workflow in Jira and Git to improve collaboration among teams.',
          'Managed and maintained a CMS hosted on an AWS EC2 instance, enhancing business presentation and online visibility.',
        ]} />
        <Tree defaultOpen={true} year={'2019'} position={'INTERNSHIP PROGRAMMER'} company={'Boxland Hong Kong Limited'} description={[
          'Collaborated with team members to design and implement RESTful APIs for efficient data exchange between applications.',
          'Built cross-platform mobile apps for ISA, streamlining inventory management and reducing errors.',
          'Developed an iOS app for bulk RFID tag scanning, reducing data entry and scanning time.',
          'Assisted in troubleshooting and debugging issues to maintain application functionality and performance.',
          'Conducted regular code reviews and participated in team meetings to ensure project milestones were met.'
        ]} />
    </div>
  )
}

export default Trees