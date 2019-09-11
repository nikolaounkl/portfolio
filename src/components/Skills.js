import React, { useContext } from "react";
import uuid from 'uuid/v1';
import { DataContext } from "../contexts/DataContext";

export default function Skills() {
    const { icons, skills } = useContext(DataContext);
    return (
        <div>
            <section
                className="portfolio-section p-3 pt-5 d-flex align-items-center"
                id="skills"
            >
                <div className="w-100">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">
                        Programming Languages &amp; Tools
                    </div>
                    <ul className="list-inline dev-icons">
                        {icons.map(icon => (
                            <li key={uuid()} className="list-inline-item">
                                <i className={icon.fa} />
                            </li>
                        ))}
                    </ul>

                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        {skills.map(skill => (
                            <li key={uuid()}>
                                <i className="fa-li fa fa-check" />
                                {skill.workflow}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
