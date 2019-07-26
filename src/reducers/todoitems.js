//import action

export default function postTodoItems(state = [], action) {
    switch (action.type) {
        case 'REMOVE_TO_DO_ITEM' : 
            console.log('Removing todo Items!');
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1, state.length)
            ]
        
        case 'EDIT_TO_DO_ITEM' : 
            console.log('Edit to do item');
            return [
                ...state,
                state[action.index].task = action.editedToDoItem
            ]
        default: 
            return state
    }
    console.log(state)
    return state
}