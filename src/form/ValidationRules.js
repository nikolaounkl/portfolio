export default function validate(values) {
    let errors = {};

    if (!values.name) {
        errors.name = "Name is required";
    } else if (values.name.length < 2) {
        errors.name = "Name must be 2 or more characters";
    }

    if (!values.email) {
        errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.subject) {
        errors.subject = "Subject is required";
    }

    if (!values.message) {
        errors.message = "Message is required";
    }

    return errors;
}
