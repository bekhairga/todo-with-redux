import { SHOW_DONE, SHOW_ALL, SHOW_LEFT } from "../constants/filter-constants";
export const showAll = () => {
    return {
        type: SHOW_ALL
    };
};
export const showDone = () => {
    return {
        type: SHOW_DONE
    };
};
export const showLeft = () => {
    return {
        type: SHOW_LEFT
    };
};
