import React from 'react';
import './project.scss';
import { projectList } from '../assets/projectList';
import Carousel from 'react-bootstrap/Carousel';

const Project: React.FC = () => {
  const projectLists = projectList.map((item,index)=> {
    return (
      <Carousel.Item key={index}>
        <img
          className="projectImg img-fluid"
          src={item.image}
          alt="TinyApp"
        
        />
        <Carousel.Caption>
          <h5>{item.id}</h5>
          <p>{item.discription}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  })
  return (
    <div id="projects" className='projects-container'>
      <div className='space'></div>
      <Carousel variant="dark">
      <p>Projects</p>
        {projectLists}
      </Carousel>
     
    </div>
  )
}

export default Project