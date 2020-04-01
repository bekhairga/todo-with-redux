export const addItem = payload => {
    return {
        type: "ADD_ITEM",
        payload
    };
};
export const deleteItem = payload => {
    return {
        type: "DELETE_ITEM",
        payload
    };
};
export const doneItem = payload => {
    return {
        type: "DONE_ITEM",
        payload
    };
};
export const importantItem = payload => {
    return {
        type: "IMPORTANT_ITEM",
        payload
    };
};
