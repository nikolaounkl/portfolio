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
                        <span>WEB DEVELOPER / WORDPRESS</span>
                    </div>
                    <p className="lead mb-5">
                        I am experienced in leveraging agile frameworks to
                        provide a robust synopsis for high level overviews.{" "}
                        <br /> Iterative approaches to corporate strategy foster
                        collaborative thinking to further the overall value
                        proposition.
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
