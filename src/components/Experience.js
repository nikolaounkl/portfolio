import React, { useContext } from "react";
import uuid from 'uuid/v1';
import { DataContext } from '../contexts/DataContext';

export default function Experience() {
    const { experience } = useContext(DataContext);
    return (
        <div>
            <section
                className="portfolio-section p-3 pt-5 d-flex align-items-center"
                id="experience"
            >
                <div className="w-100">
                    <h2 className="mb-5">Experience</h2>

                    {experience.map(work => (
                        <div key={uuid()} className="portfolio-item d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="resume-content">
                                <h3 className="mb-0">{work.title}</h3>
                                <div className="subheading mb-0">
                                    {work.company}
                                </div>
                                <span className="text-primary">
                                    {work.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
