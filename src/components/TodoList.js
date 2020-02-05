import React, { Component } from 'react'
import TodoItem from './TodoItem'
export class TodoList extends Component {
    render() {
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    Todo List
                </h3>
                {
                    this.props.items.map(item => {
                        return(
                            <TodoItem key = {item.id} title={item.title}
                            handleDelete = {() => this.props.handleDelete(item.id)}
                            handleEdit = {() => this.props.handleEdit(item.id)}/> 
                        )
                    })
                }
                
                <button onClick={this.props.clearList} className="btn btn-danger text-capitalize mt-5">Clear List</button>
            </ul>
        )
    }
}

export default TodoList
