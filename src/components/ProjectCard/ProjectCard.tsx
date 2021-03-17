import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }: Props) {
    const Fade = require('react-reveal/Fade');
    return (
        <Fade duration={800} bottom>
        <a className="project-card-main" href={project.url}>
            <div className="card-title">
                <p>{project.title}</p>
            </div>
            <div className="card-img">
                <img src={project.preview}></img>
            </div>
            <div className="card-desc">
                <p>{project.desc}</p>
            </div>
        </a>
        </Fade>
    );
}
interface Props {
    project: {
        title: string,
        preview: string,
        desc: string,
        url: string
    }
}
export default ProjectCard;