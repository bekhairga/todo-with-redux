/** @format */

import React from "react";
import { connect } from "react-redux";
import "./item-filter-buttons.css";
const Buttons = ({ filter, changeFilter }) => {
    let classNames;
    const buttons = filter.map(el => {
        if (el.active) {
            classNames = "btn btn-primary";
        } else {
            classNames = "btn btn-outline-secondary";
        }
        return (
            <button
                className={classNames}
                onClick={() => changeFilter(el.func)}
                key={el.desc}
            >
                {el.label}
            </button>
        );
    });

    return <div className="d-flex">{buttons}</div>;
};
const mapStateToProps = state => {
    return {
        todos: state.todos,
        filter: state.filter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeFilter: func => dispatch(func())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
