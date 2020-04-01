import { createStore, combineReducers } from "redux";
import filterReducer from "./filter-reducer";
import todoReducer from "./todos-reducer";
import searchReducer from "./search-reducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    search: searchReducer
});
const store = createStore(rootReducer);
export default store;
