export const createContact = contact => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection("contacts")
            .add({
                ...contact,
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
