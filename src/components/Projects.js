import React, { useContext } from "react";
import uuid from 'uuid/v1';
import { DataContext } from "../contexts/DataContext";

export default function Projects() {
    const { projects } = useContext(DataContext);
    return (
        <div>
            <section
                className="portfolio-section p-3 pt-5 d-flex align-items-center"
                id="projects"
            >
                <div className="w-100">
                    <h2 className="mb-5">Projects</h2>
                    <div className="subheading mb-3">
                        Here is some of my work
                    </div>
                    <div className="row">
                        {projects.map(project => (
                            <div key={uuid()} className="col-md-6 col-lg-6 col-xl-4 mb-3">
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={project.img}
                                        alt=""
                                        className="img-thumbnail"
                                    />
                                </a>
                                <div className="imgheading d-flex align-items-center justify-content-between">
                                    {project.title}
                                    <div>
                                        {project.icons.map(icon => (
                                            <i key={uuid()} className={icon.fa} />
                                        ))}
                                    </div>
                                </div>
                                <p>{project.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
