import React from 'react';
import './project.scss';
import { projectList } from '../assets/projectList';

const Project: React.FC = () => {
  const projectLists = projectList.map((item,index)=> {
    return <div className="card" key={index} >
    <img src={item.image} width="250" className="card-img" alt="tinyapp" />
      <div className="card-body">
        <h5 className="card-title">{item.id}</h5>
        <p className="card-text">{item.discription}</p>
      </div>
       {/* <ul className="list-group list-group-flush">
         <li className="list-group-item">An item</li>
         <li className="list-group-item">A second item</li>
         <li className="list-group-item">A third item</li>
       </ul> */}
      <div className="card-body">
        <a href="#" className="card-link">Github</a>
        <a href="#" className="card-link">Another link</a>
      </div>
  </div>
  })
  return (
    <div className='projects-container'>
      <p>Project!</p>
      <div className='container'>
        {projectLists}
      </div>  
    </div>
  )
}

export default Project