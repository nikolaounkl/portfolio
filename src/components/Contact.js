import React, { Component } from "react";
import { connect } from "react-redux";
import { createContact } from "../store/actions/contactActions";

class Contact extends Component {
    state = {
        name: [{ value: "" }, { valid: "" }],
        email: [{ value: "" }, { valid: "" }],
        message: [{ value: "" }, { valid: "" }]
    };
    handleChange = e => {
        this.setState({
            [e.target.id]: [{ value: e.target.value }, { valid: "" }]
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        if (
            this.state.name[0].value &&
            this.state.email[0].value &&
            this.state.message[0].value
        ) {
            this.props.createContact(this.state);
            this.props.history.push("/");
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
                                        !this.state.name[0].value
                                            ? "form-control is-invalid"
                                            : "form-control is-valid"
                                    }
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="email"
                                    onChange={this.handleChange}
                                    className={
                                        !this.state.email[0].value
                                            ? "form-control is-invalid"
                                            : "form-control is-valid"
                                    }
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="message"
                                    onChange={this.handleChange}
                                    className={
                                        !this.state.message[0].value
                                            ? "form-control is-invalid"
                                            : "form-control is-valid"
                                    }
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
