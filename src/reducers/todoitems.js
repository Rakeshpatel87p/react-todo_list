//import action

export default function postTodoItems(state = [], action) {
    switch (action.type) {
        case 'REMOVE_TO_DO_ITEM' : 
            console.log('Removing todo Items!');
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1, state.length)
            ]
        default: 
            return state
    }
    
    return state
}