import React from "react";

export default function ProjectCard({title, link, description, image}){
        return (
        <div className="projDiv">
            <h2 className="projTit"><a href={link}>{title}</a></h2>
            <p className="siteUrl"><a href={link}>{link}</a></p>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} width={400} />
            </a>
        </div>
    );
}