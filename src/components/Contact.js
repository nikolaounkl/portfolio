import React, { Component } from "react";
import { connect } from "react-redux";
import { createContact } from "../store/actions/contactActions";

class Contact extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        error: ""
    };
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log(this.state);
    };
    handleSubmit = e => {
        e.preventDefault();
        if (
            this.state.name ||
            this.state.email ||
            this.state.message ||
            this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ) {
            this.props.createContact(this.state);
            this.setState({
                name: "",
                email: "",
                subject: "",
                message: "",
                error: false
            });
            setTimeout(
                function() {
                    this.props.history.push("/");
                }.bind(this),
                5000
            );
        } else {
            this.setState({
                error: true
            });
        }
    };
    render() {
        return (
            <div>
                <div className="overlay" />
                <section
                    className="portfolio-section p-3 p-lg-5 d-flex align-items-center"
                    id="contact"
                >
                    <div className="w-100">
                        <h2 className="mb-5">Contact</h2>
                        <form autoComplete="off" onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        id="name"
                                        onChange={this.handleChange}
                                        className="form-control"
                                        value={this.state.name}
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        id="email"
                                        onChange={this.handleChange}
                                        className="form-control"
                                        value={this.state.email}
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    id="subject"
                                    onChange={this.handleChange}
                                    className="form-control"
                                    value={this.state.subject}
                                    placeholder="Your Subject"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    autoComplete="off"
                                    type="text"
                                    id="message"
                                    onChange={this.handleChange}
                                    className="form-control"
                                    value={this.state.message}
                                    placeholder="Your Message"
                                    rows="7"
                                />
                            </div>
                            <button className="btn btn-yellow btn-block">
                                Send
                            </button>
                        </form>

                        <p
                            className={
                                this.state.error
                                    ? "show-error bg-danger text-white"
                                    : "hide-error bg-danger text-white d-none"
                            }
                        >
                            {this.state.error &&
                            !this.state.email.match(
                                /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                            )
                                ? "Use a valid email!"
                                : this.state.error &&
                                  this.state.email.match(
                                      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                                  )
                                ? "All fields are required!"
                                : ""}
                        </p>
                        <p
                            className={
                                !this.state.error && this.state.error !== ""
                                    ? "show-success bg-success text-white"
                                    : "hide-success bg-success text-white"
                            }
                        >
                            Your message is sent!
                        </p>
                    </div>
                </section>
            </div>
        );
    }
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
