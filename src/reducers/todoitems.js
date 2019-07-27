//import action

export default function postTodoItems(state = [], action) {
    switch (action.type) {
        case 'REMOVE_TO_DO_ITEM' : 
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1, state.length)
            ]
        
        case 'EDIT_TO_DO_ITEM' : 
            return [
                ...state.slice(0,action.index),
                {...state[action.index], task: action.editedToDoItem, editedOn: 'today'},
                ...state.slice(action.index + 1)
            ]
        
        case 'ADD_NEW_TO_DO' :
            return [
                ...state,
                {task: action.newToDo, dateAdded: action.dataAdded}
            ]
        
        default: 
            return state
    }
    console.log(state)
    //return state
}