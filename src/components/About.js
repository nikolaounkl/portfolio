import React from "react";

export default function About() {
    return (
        <div>
            <div className="overlay" />
            <section
                className="portfolio-section p-3 p-lg-5 d-flex align-items-center"
                id="about"
            >
                <div className="w-100">
                    <div className="subheading">
                        <span>When simplicity meets creativity</span>
                    </div>
                    <h2 className="mb-0">
                        <span className="title">NIKOLAOS NIKOLAOU</span>
                    </h2>
                    <div className="subheading mb-5">
                        <span>FRONT-END WEB DEVELOPER</span>
                    </div>
                    <p className="lead mb-5">
                        Hi... I'm Nikos, a web developer based in Berlin,
                        Germany.
                        <br /> <br />
                        My main area of expertise is front-end web development
                        of web apps.
                        <br /> With a strong focus on cross-device & browsers
                        optimisation, continuously learning <br/>and keeping track
                        on new technologies that can improve my daily workflow.
                    </p>
                    <div className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/nikolaos-nikolaou-585407127/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a
                            href="https://github.com/nikolaounkl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github" />
                        </a>
                        <a
                            href="https://codepen.io/nikolaounkl/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-codepen" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
