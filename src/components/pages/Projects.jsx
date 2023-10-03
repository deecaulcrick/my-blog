import React from 'react'
import projects from '../../index/projects'
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className="projects">
            <h1 className='page-title'>Projects</h1>
            <p>Here's a list of projects that made it to the internet:</p>


            <div className="project-list">

                {projects.map((project, id) => (
                    <div className='project-card' key={id}>
                        <h2><Link to={project.link}>{project.title}</Link></h2>

                        <p className='post-excerpt'>{project.desc}</p>

                        <div className="tools-container">
                            {project.tools.map((tool) => (
                                <div className="tools">{tool}</div>


                            ))}
                        </div>

                        <a href={project.link} target='_blank' className='project-link'> 🡭 View project</a>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Projects