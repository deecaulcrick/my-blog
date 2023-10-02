import React from 'react'
import projects from '../../index/projects'
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className="projects">
            <h1 className='page-title'>Projects</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


            <div className="project-list">

                {projects.map((project, id) => (
                    <div className='project-card' key={id}>
                        <h2><Link to={project.link}>{project.title}</Link></h2>
                        <p className='post-excerpt'>{project.desc}</p>
                        <a href={project.link} target='_blank' className='project-link'> 🡭 View project</a>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Projects