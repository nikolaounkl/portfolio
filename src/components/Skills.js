import React from "react";

export default function Skills() {
    return (
        <div>
            <div className="overlay" />
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
                        <li className="list-inline-item">
                            <i className="fab fa-html5" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-css3-alt" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-js-square" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-react" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-vuejs" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-sass" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-bootstrap" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-php" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-laravel" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-aws" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-git-square" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-npm" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-wordpress" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-elementor" />
                        </li>
                    </ul>

                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-check" />
                            Front-end Web Development
                        </li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            Back-end Web Development
                        </li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            Cloud Services
                        </li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            Working with APIs
                        </li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            Cross Devices optimisation
                        </li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            Responsive Design
                        </li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            Cross Browser Testing &amp; Debugging
                        </li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            Agile software development with Scrum
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
