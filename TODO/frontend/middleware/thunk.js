
export const thunk = (store) => {
    return (next) => {
        return (action) => {
            if (typeof action === "function") {
                return action(store.dispact, store.getState);
            } else {
                return next(action);
            }
        };
    };
};