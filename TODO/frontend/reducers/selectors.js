export const allTodos = (state) => {
    
    let keys = Object.keys(state.todos);
    
    const ids = keys.map((id) => {
        return state.todos[id];
    });
    return ids;
};

