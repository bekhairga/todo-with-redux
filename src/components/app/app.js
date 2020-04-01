import React from "react";
import AddPanel from "../add-panel";
import AppHeader from "../app-header";
import ItemList from "../item-list";
import "./app.css";
import SearchPanel from "../search-panel";
import { Provider } from "react-redux";
import store from "../../reducers/tasks";
const App = () => {
    return (
        <div className="app">
            <Provider store={store}>
                <AppHeader done={5} left={4} />
                <SearchPanel />
                <ItemList />
                <AddPanel />
            </Provider>
        </div>
    );
};
export default App;
