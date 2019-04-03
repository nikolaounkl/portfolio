import React, { Component } from "react";
import { connect } from "react-redux";
import { createContact } from "../store/actions/contactActions";

class Contact extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleKeyPress = e => {
        console.log(e.target.value);
    };
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.name && this.state.email && this.state.message) {
            this.props.createContact(this.state);
            this.setState({
                name: "",
                email: "",
                subject: "",
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
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        id="name"
                                        onChange={this.handleChange}
                                        onKeyPress={this.handleKeyPress}
                                        className="form-control"
                                        value={this.state.name}
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        id="email"
                                        onChange={this.handleChange}
                                        onKeyPress={this.handleKeyPress}
                                        className="form-control"
                                        value={this.state.email}
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="subject"
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleKeyPress}
                                    className="form-control"
                                    value={this.state.subject}
                                    placeholder="Your Subject"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    type="text"
                                    id="message"
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleKeyPress}
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
