import React from "react";
import Buttons from "../item-filter-buttons";
import { connect } from "react-redux";
import { search } from "../../actions/search-actions";
import "./search-panel.css";
const SearchPanel = ({ search }) => {
    return (
        <div className="d-flex search">
            <input
                type="text"
                className="form-control search-form"
                onChange={e => search(e.target.value)}
            />
            <Buttons />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        search: text => dispatch(search(text))
    };
};
export default connect(null, mapDispatchToProps)(SearchPanel);
