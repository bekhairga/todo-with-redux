/** @format */

import React from "react";
import "./item-list-element.css";
import {
    deleteItem,
    doneItem,
    importantItem
} from "../../actions/todos-actions";
import { connect } from "react-redux";
const ItemListElement = ({ importantItem, doneItem, deleteItem, item }) => {
    const { label, important, done, id } = item;
    let classList = "list-element";
    if (important) {
        classList += " important";
    }
    if (done) {
        classList += " done";
    }
    return (
        <span className="todo-label">
            <span className={classList} onClick={() => doneItem(id)}>
                {label}
            </span>

            <button
                className="btn btn-outline-danger btn-sm float-right btn-todo"
                onClick={() => deleteItem(id)}
            >
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            <button
                className="btn btn-outline-success btn-sm float-right btn-todo"
                onClick={() => importantItem(id)}
            >
                <i className="fa fa-lock" aria-hidden="true"></i>
            </button>
        </span>
    );
};
const mapDispatchToProps = dispatch => {
    return {
        deleteItem: id => dispatch(deleteItem(id)),
        doneItem: id => dispatch(doneItem(id)),
        importantItem: id => dispatch(importantItem(id))
    };
};
export default connect(null, mapDispatchToProps)(ItemListElement);
