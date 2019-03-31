const initState = {};

const contactReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_CONTACT_SUCCESS":
            console.log("create contact success");
            return state;
        case "CREATE_CONTACT_ERROR":
            console.log("create contact error");
            return state;
        default:
            return state;
    }
};

export default contactReducer;
