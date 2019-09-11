import React from "react";

export default function Projects() {
    return (
        <div>
            <section
                className="portfolio-section p-3 pt-5 d-flex align-items-center"
                id="projects"
            >
                <div className="w-100">
                    <h2 className="mb-5">Projects</h2>
                    <div className="subheading mb-3">
                        Here it's some of my work
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-4 mb-3">
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
                            <p>
                                Farm Nation was a full stack project for a
                                gaming platform with online farming games. It
                                was built from scratch, based on Laravel
                                framework.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4 mb-3">
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
                            <p>
                                A login / register page used from
                                www.plinga.com. Facebook login, form validation
                                & page restyling were some of my main
                                responsibilities.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4 mb-3">
                            <a
                                href="http://www.tennis-fuechse-marzahn.de/"
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
                                    <i className="fab fa-react" />
                                    <i className="mr-1 fab fa-html5" />
                                    <i className="mr-1 fab fa-css3-alt" />
                                </div>
                            </div>
                            <p>
                                The official webpage of T.S.V. Marzahner Füchse
                                e.V. A tennis club webpage built with React &
                                Bulma framework.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4 mb-3">
                            <a
                                href="https://powercake.de/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="images/powercake.png"
                                    alt="Farm Nation"
                                    className="img-thumbnail"
                                />
                            </a>
                            <div className="imgheading d-flex align-items-center justify-content-between">
                                Foodtastic
                                <div>
                                    <i className="mr-1 fab fa-wordpress" />
                                    <i className="mr-1 fab fa-elementor" />
                                </div>
                            </div>
                            <p>
                                Foodtastic was a WordPress project for an
                                e-shop, created with Elementor & WooCommerce.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4 mb-3">
                            <a
                                href="https://www.plinga.com/corporate"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="images/corporate.png"
                                    alt="Plinga corporate"
                                    className="img-thumbnail"
                                />
                            </a>
                            <div className="imgheading d-flex align-items-center justify-content-between">
                                Plinga Corporate
                                <div>
                                    <i className="mr-1 fab fa-html5" />
                                    <i className="mr-1 fab fa-css3-alt" />
                                    <i className="mr-1 fab fa-bootstrap" />
                                    <i className="mr-1 fab fa-js-square" />
                                </div>
                            </div>
                            <p>
                                The corporate page of Plinga Games was a static
                                webiste, created with Bootstrap 4 framework.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
