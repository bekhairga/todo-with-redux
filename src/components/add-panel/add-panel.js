import React from "react";
import "./add-panel.css";
import { connect } from "react-redux";
import { addItem } from "../../actions/todos-actions";
import uuid from "react-uuid";

const createItem = value => {
    return {
        label: value,
        important: false,
        done: false,
        id: uuid()
    };
};

class AddPanel extends React.Component {
    state = {
        label: ""
    };
    setValue = value => {
        this.setState({ label: value });
    };
    makeDefault = val => {
        this.setState({
            label: ""
        });
    };

    render() {
        const { label } = this.state;
        const { addItem } = this.props;
        console.log(this.state.label);
        return (
            <form className="form-group d-flex add-panel">
                <input
                    type="text"
                    className="form-control input-control"
                    onChange={e => {
                        this.setValue(e.target.value);
                    }}
                    value={label}
                />
                <button
                    className="btn btn-primary btn-add"
                    onClick={e => {
                        e.preventDefault();
                        if (label !== "") {
                            addItem(createItem(label));
                            this.makeDefault();
                        }
                    }}
                >
                    Add
                </button>
            </form>
        );
    }
}
const mapStateToProps = state => {
    return {
        item: null
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addItem: value => dispatch(addItem(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPanel);
