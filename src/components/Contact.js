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
        console.log(this.state);
        // this.props.createContact(this.state);
        // this.props.history.push("/");
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
                            <p>
                                <input
                                    type="text"
                                    id="name"
                                    onChange={this.handleChange}
                                />
                            </p>
                            <p>
                                <input
                                    type="text"
                                    id="email"
                                    onChange={this.handleChange}
                                />
                            </p>
                            <p>
                                <textarea
                                    id="message"
                                    onChange={this.handleChange}
                                />
                            </p>
                            <p>
                                <button>Send</button>
                            </p>
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
