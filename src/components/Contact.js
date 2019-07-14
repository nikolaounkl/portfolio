import React from "react";
import { connect } from "react-redux";
import { createContact } from "../store/actions/contactActions";
import useForm from "../form/useForm";
import validate from "../form/ValidationRules";

function Contact() {
    // Declare new state variables and functions
    const { values, errors, handleChange, handleSubmit } = useForm(
        send,
        validate
    );

    function send() {
        console.log("No errors, submit callback called!");
    }

    return (
        <div>
            <div className="overlay" />
            <section
                className="portfolio-section p-3 pt-5 d-flex align-items-center"
                id="contact"
            >
                <div className="w-100">
                    <h2 className="mb-5">Contact</h2>
                    <form autoComplete="off" onSubmit={handleSubmit} noValidate>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    id="name"
                                    onChange={handleChange}
                                    className={`form-control ${errors.name &&
                                        "border border-danger"}`}
                                    value={values.name || ""}
                                    placeholder="Your Name"
                                />
                                {errors.name && (
                                    <small className="text-danger">
                                        {errors.name}
                                    </small>
                                )}
                            </div>
                            <div className="form-group col-md-6">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    id="email"
                                    onChange={handleChange}
                                    className={`form-control ${errors.email &&
                                        "border border-danger"}`}
                                    value={values.email || ""}
                                    placeholder="Your Email"
                                />
                                {errors.email && (
                                    <small className="text-danger">
                                        {errors.email}
                                    </small>
                                )}
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                autoComplete="off"
                                type="text"
                                id="subject"
                                onChange={handleChange}
                                className={`form-control ${errors.subject &&
                                    "border border-danger"}`}
                                value={values.subject || ""}
                                placeholder="Your Subject"
                            />
                            {errors.subject && (
                                <small className="text-danger">
                                    {errors.subject}
                                </small>
                            )}
                        </div>
                        <div className="form-group">
                            <textarea
                                autoComplete="off"
                                type="text"
                                id="message"
                                onChange={handleChange}
                                className={`form-control ${errors.message &&
                                    "border border-danger"}`}
                                value={values.message || ""}
                                placeholder="Your Message"
                                rows="7"
                            />
                            {errors.message && (
                                <small className="text-danger">
                                    {errors.message}
                                </small>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="btn btn-yellow btn-block"
                        >
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
