import React from 'react';
import './project.scss';
import { projectList } from '../assets/projectList';

const Project: React.FC = () => {
  const projectLists = projectList.map((item)=> {
    return (
    <div className="card col-md-5 m-5 col-sm-1 "  style={{
      backgroundColor:"rgb(41, 41, 60)",
      boxShadow: "10px 5px 5px rgb(108, 106, 106)",
      border: "2px solid rgb(145, 142, 142)",
      }} >
        <img src={item.image} className="card-img-top " alt={item.id} style={{width:"33vw", height:"35vh"}}/>
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
      <div className='row justify-content-center text-white' >
        {projectLists}
      </div>
    </div>
  )
}

export default Project