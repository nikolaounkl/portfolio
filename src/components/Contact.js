import React from "react";

export default function Contact() {
    return (
        <div>
            <div className="overlay" />
            <section
                className="portfolio-section p-3 p-lg-5 d-flex align-items-center"
                id="contact"
            >
                <div className="w-100">
                    <h2 className="mb-5">Contact</h2>
                    <p>Together we can make our ideas reality!</p>
                    <form name="contact" method="POST" netlify>
                        <p>
                            <label>
                                Your Name: <input type="text" name="name" />
                            </label>
                        </p>
                        <p>
                            <label>
                                Your Email: <input type="email" name="email" />
                            </label>
                        </p>
                        <p>
                            <label>
                                Message: <textarea name="message" />
                            </label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </div>
            </section>
        </div>
    );
}
