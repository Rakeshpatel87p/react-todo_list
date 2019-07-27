import React, { Component } from 'react';
import { connect } from 'react-redux'

import ListItem from './ListItem';
import AddToDo from './AddToDo';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

class ToDoList extends Component {

    render() {
        return (
          <div>
            <ul>
              {this.props.todoItems.map((item, i) => (
                  <ListItem {...this.props} {...item} key={i} index={i}/>
              ))
            }
            </ul>
            <AddToDo {...this.props}/>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);


//Set up basic views
//Set up routing