/** @format */

import React from "react";
import ItemListElement from "../item-list-element";
import { connect } from "react-redux";
import { changeFilter, searchEngine } from "../../actions/action-creator";
const ItemList = ({ todos, filter, search }) => {
    const filteredElements = changeFilter(todos, filter);
    const searchingElements = searchEngine(search, filteredElements);
    const list = searchingElements.map(el => {
        return (
            <li className="list-group-item d-flex" key={el.id}>
                <ItemListElement item={el} />
            </li>
        );
    });
    return <ul className="list-group">{list}</ul>;
};

const mapStateToProps = state => {
    return {
        todos: state.todos,
        filter: state.filter,
        search: state.search
    };
};

export default connect(mapStateToProps)(ItemList);
