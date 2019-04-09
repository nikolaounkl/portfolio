import React from "react";

export default function Projects() {
    return (
        <div>
            <div className="overlay" />
            <section
                className="portfolio-section p-3 p-lg-5 d-flex align-items-center"
                id="projects"
            >
                <div className="w-100">
                    <h2 className="mb-5">Projects</h2>
                    <div className="subheading mb-3">
                        Here it's some of my work
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <a
                                href="https://www.farm-nation.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="images/farmnation.png"
                                    alt="Farm Nation"
                                    className="img-thumbnail"
                                />
                            </a>
                            <div className="imgheading d-flex align-items-center justify-content-between">
                                Farm Nation
                                <div>
                                    <i className="mr-1 fab fa-php" />
                                    <i className="mr-1 fab fa-laravel" />
                                    <i className="mr-1 fab fa-html5" />
                                    <i className="mr-1 fab fa-css3-alt" />
                                    <i className="mr-1 fab fa-js-square" />
                                    <i className="fab fa-aws" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <a
                                href="https://www.plinga.com/en/blocky_farm/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="images/plinga.png"
                                    alt="Plinga"
                                    className="img-thumbnail"
                                />
                            </a>
                            <div className="imgheading d-flex align-items-center justify-content-between">
                                Plinga Games
                                <div>
                                    <i className="mr-1 fab fa-html5" />
                                    <i className="mr-1 fab fa-css3-alt" />
                                    <i className="mr-1 fab fa-js-square" />
                                    <i className="mr-1 fab fa-php" />
                                    <i className="fab fa-aws" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <a
                                href="http://www.tennis-fuechse-marzahn.de/#lageplan"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="images/tennis.png"
                                    alt="Tennis Club"
                                    className="img-thumbnail"
                                />
                            </a>
                            <div className="imgheading d-flex align-items-center justify-content-between">
                                Tennis Club
                                <div>
                                    <i className="mr-1 fab fa-html5" />
                                    <i className="mr-1 fab fa-css3-alt" />
                                    <i className="fab fa-js-square" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
