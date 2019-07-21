import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListItem from './ListItem';

class ToDoList extends Component {

    render() {
        return (
          <div>
            <ul>
              {this.props.todoItems.map((item, i) => (
                  <ListItem {...item} key={i}/>
              ))
            }
            </ul>
          </div>
        )
    }
}

function mapStateToProps(state) {
	return {
    todoItems: state.todoItems,
    quotes: state.quotes
	}
}

export default connect(mapStateToProps)(ToDoList);


//Set up basic views
//Set up routing