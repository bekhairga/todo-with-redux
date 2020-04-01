import { SEARCH } from "../constants/search-constants";
export const search = payload => {
    return {
        type: SEARCH,
        payload
    };
};
