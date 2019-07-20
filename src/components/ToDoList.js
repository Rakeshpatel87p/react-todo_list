import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class ToDoList extends Component {
    render() {
        return (
          <div>
            <ul>
              {this.props.todoItems.map((item, i) => (
                  <li key={i}>
                    <Link to={`/task/${i}`}>
                      <p {...item}>{item.task}</p>
                    </Link>  
                  <button>Remove</button>
                  <button>Edit</button>
                </li>
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