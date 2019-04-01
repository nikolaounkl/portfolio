export const createContact = contact => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection("contacts")
            .add({
                name: contact.name,
                email: contact.email,
                message: contact.message,
                createdAt: new Date()
            })
            .then(() => {
                dispatch({ type: "CREATE_CONTACT_SUCCESS" });
            })
            .catch(err => {
                dispatch({ type: "CREATE_CONTACT_ERROR" }, err);
            });
    };
};
