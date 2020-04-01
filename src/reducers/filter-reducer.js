import { SHOW_DONE, SHOW_ALL, SHOW_LEFT } from "../constants/filter-constants";
import { showAll, showDone, showLeft } from "../actions/filter-actions";

const filteredElements = [
    { label: "All", desc: "all", active: true, func: () => showAll() },
    { label: "Done", desc: "done", active: false, func: () => showDone() },
    { label: "Left", desc: "left", active: false, func: () => showLeft() }
];

const filterReducer = (state = filteredElements, action) => {
    switch (action.type) {
        case SHOW_ALL:
            return state.map(el =>
                el.desc === "all"
                    ? { ...el, active: true }
                    : { ...el, active: false }
            );
        case SHOW_DONE:
            return state.map(el =>
                el.desc === "done"
                    ? { ...el, active: true }
                    : { ...el, active: false }
            );
        case SHOW_LEFT:
            return state.map(el =>
                el.desc === "left"
                    ? { ...el, active: true }
                    : { ...el, active: false }
            );

        default:
            return state;
    }
};
export default filterReducer;
