import ProjectCard from '../components/ProjectCard';
import projects from '../data/projectsData';
import React from 'react'
import AOS from 'aos'

export default function MyProjects() {
    return (
        <div>
            <div className="myProjs" >
                {projects.map((project, index) => (
                    <div data-aos="fade-up">
                        <ProjectCard
                            key={index}
                            title={project.title}
                            link={project.link}
                            description={project.description}
                            image={project.image}
                        />
                    </div>
                ))}
            </div>
            <h2>+ Many more to come...</h2>
        </div>
    );
}