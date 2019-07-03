import React, { useState } from "react";
import { connect } from "react-redux";
import { createContact } from "../store/actions/contactActions";

function Contact() {
    // Declare new state variables and functions
    const [value, setValue] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        error: ""
    });

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.id]: e.target.value
        });
    };

    console.log(value.name);
    return (
        <div>
            <div className="overlay" />
            <section
                className="portfolio-section p-3 pt-5 d-flex align-items-center"
                id="contact"
            >
                <div className="w-100">
                    <h2 className="mb-5">Contact</h2>
                    <form autoComplete="off">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    id="name"
                                    onChange={handleChange}
                                    className="form-control"
                                    value={value.name}
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    id="email"
                                    onChange={handleChange}
                                    className="form-control"
                                    value={value.email}
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                autoComplete="off"
                                type="text"
                                id="subject"
                                onChange={handleChange}
                                className="form-control"
                                value={value.subject}
                                placeholder="Your Subject"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                autoComplete="off"
                                type="text"
                                id="message"
                                onChange={handleChange}
                                className="form-control"
                                value={value.message}
                                placeholder="Your Message"
                                rows="7"
                            />
                        </div>
                        <button className="btn btn-yellow btn-block">
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        createContact: contact => dispatch(createContact(contact))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Contact);
