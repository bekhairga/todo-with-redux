import uuid from "react-uuid";
import {
    ADD_ITEM,
    IMPORTANT_ITEM,
    DONE_ITEM,
    DELETE_ITEM
} from "../constants/todos-constants";
const todos = [
    { label: "Learn React", important: false, done: true, id: uuid() },
    { label: "Learn Redux", important: false, done: false, id: uuid() },
    { label: "Improve knowledge", important: true, done: false, id: uuid() }
];
const todoReducer = (state = todos, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        case DELETE_ITEM:
            return [...state.filter(el => el.id !== action.payload)];
        case DONE_ITEM:
            return state.map(el =>
                el.id === action.payload ? { ...el, done: !el.done } : el
            );
        case IMPORTANT_ITEM:
            return state.map(el =>
                el.id === action.payload
                    ? { ...el, important: !el.important }
                    : el
            );
        default:
            return state;
    }
};
export default todoReducer;
