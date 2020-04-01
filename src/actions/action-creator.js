export const changeFilter = (todos, filter) => {
    const whatToShow = filter.find(el => el.active);
    if (whatToShow.desc === "all") {
        return [...todos];
    }
    if (whatToShow.desc === "done") {
        return todos.filter(el => el.done);
    }
    if (whatToShow.desc === "left") {
        return todos.filter(el => !el.done);
    }
};

export const searchEngine = (text, items) => {
    if (text === "") {
        return items;
    }
    return items.filter(
        el => el.label.toLowerCase().indexOf(text.toLowerCase()) > -1
    );
};
