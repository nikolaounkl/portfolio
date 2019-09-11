import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export default function Interests() {
    const { content } = useContext(DataContext)
    return (
        <div>
            <section
                className="portfolio-section p-3 pt-5 d-flex align-items-center"
                id="interests"
            >
                <div className="w-100">
                    <h2 className="mb-5">Interests</h2>
                    <p>
                        {content.interests}
                    </p>
                </div>
            </section>
        </div>
    );
}
