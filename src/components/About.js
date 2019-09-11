import React, { useContext } from "react";
import uuid from 'uuid/v1';
import { DataContext } from "../contexts/DataContext";

export default function About() {
    const { content, socialLinks } = useContext(DataContext);
    return (
        <div>
            <section
                className="portfolio-section p-3 pt-5 d-flex align-items-center"
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
                        {content.about_intro}
                        <br />
                        <br />
                        {content.about_text}
                    </p>
                    <div className="social-icons">
                        {socialLinks.map(link => (
                            <a
                                key={uuid()}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={link.fa} />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
