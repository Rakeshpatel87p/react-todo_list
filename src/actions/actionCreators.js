
export function removeToDoItem(index) {
    return {
        type: 'REMOVE_TO_DO_ITEM',
        index
    }
}

export function editToDoItem(index, editedToDoItem) {
    return {
        type: 'EDIT_TO_DO_ITEM',
        index,
        editedToDoItem
    }
}