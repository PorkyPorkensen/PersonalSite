import ProjectCard from '../components/ProjectCard';
import projects from '../data/projectsData';
import React from 'react'

export default function MyProjects() {
    return (
        <div>
            <div className="myProjs">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        link={project.link}
                        description={project.description}
                        image={project.image}
                    />
                ))}
            </div>
            <h2>+ Many more to come...</h2>
        </div>
    );
}