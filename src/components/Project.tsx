import React from 'react';
import './project.scss';
import { projectList } from '../assets/projectList';
import Carousel from 'react-bootstrap/Carousel';

const Project: React.FC = () => {
  const projectLists = projectList.map((item,index)=> {
    return (
      <Carousel.Item>
        <img
          key={index}
          className="projectImg"
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
    <div className='projects-container'>
      <p>Projects</p>
      <div className='container'>
      <Carousel variant="dark">
        {projectLists}
      </Carousel>
      </div>  
    </div>
  )
}

export default Project