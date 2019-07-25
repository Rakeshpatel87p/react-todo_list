import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }
    removeTodo = (i) => {
        this.props.removeToDoItem(i);
    }

    editToDoItem = (i) => {
        this.setState({isEditing: true})
        
    }

    handleEditedToDoItem = (e, i) => {
        e.preventDefault();
        const editedTodo = this.refs.editedTodo.value;
        this.props.editToDoItem(i, editedTodo);
        //this.setState({isEditing: false});
    }

    render() {
        const {index} = this.props;
        return (
            <li key={index}>
                {
                    this.state.isEditing 
                    ?   <form ref="commentForm" className="comment-form" onSubmit={(e) => this.handleEditedToDoItem(e, index)}>
                            <input type="text" ref="editedTodo" placeholder={this.props.task}/>
                        </form>
                    

                    :   <Link to={`/task/${this.props.index}`}>
                            <p>{this.props.task}</p>
                        </Link> 

 
                }
                    <button onClick={(e) => this.removeTodo(index)}>Remove</button>
                    <button type="button" onClick={() => this.editToDoItem()}>Edit</button>
            </li>
        )
    }
}

export default ListItem