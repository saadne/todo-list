import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{this.props.title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" 
                    onClick={this.props.handleEdit}>
                        <i class="fa fa-edit"></i>
                    </span>
                    <span className="mx-2 text-danger" 
                    onClick={this.props.handleDelete}>
                        <i class="fa fa-remove"></i>
                    
                    </span>
                </div>
    
            </li>
            
        )
    }
}

export default TodoItem
