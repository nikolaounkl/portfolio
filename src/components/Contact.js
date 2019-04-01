import React, { Component } from "react";
import { connect } from "react-redux";
import { createContact } from "../store/actions/contactActions";

class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    };
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.name && this.state.email && this.state.message) {
            this.props.createContact(this.state);
            this.setState({
                name: "",
                email: "",
                message: ""
            });
        } else {
            return false;
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
                        <p>Together we can make our ideas reality!</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    onChange={this.handleChange}
                                    className={
                                        !this.state.name
                                            ? "form-control is-invalid"
                                            : "form-control is-valid"
                                    }
                                    value={this.state.name}
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="email"
                                    onChange={this.handleChange}
                                    className={
                                        !this.state.email
                                            ? "form-control is-invalid"
                                            : "form-control is-valid"
                                    }
                                    value={this.state.email}
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="message"
                                    onChange={this.handleChange}
                                    className={
                                        !this.state.message
                                            ? "form-control is-invalid"
                                            : "form-control is-valid"
                                    }
                                    value={this.state.message}
                                    placeholder="Your Message"
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-secondary btn-block">
                                    Send
                                </button>
                            </div>
                        </form>
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
