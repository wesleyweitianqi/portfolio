import React from 'react';
import './project.scss';
import { projectList } from '../assets/projectList';

const Project: React.FC = () => {
  const projectLists = projectList.map((item)=> {
    return (
    <div className="card col-md-5 m-5 col-sm-1 "  style={{
      backgroundColor:"rgb(41, 41, 60)",
      border: "none"
      }} >
        <img src={item.image} className="card-img-top " alt={item.id} />
        <div className="card-body">
          <h3 className="card-title">{item.id}</h3>
          <p className="card-text">{item.description}</p>
          <a href={item.url} target="_blank" className="btn btn-primary" rel="noreferrer">github</a>
        </div>
      </div>)
  })

  return (
    <div id="projects" className='projects-container'>
      <p>Projects</p>
      <div className='container-fluid'>
      <div className='row justify-content-center text-white' >
        {projectLists}
      </div>

      </div>
    </div>
  )
}

export default Project