import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="input-group">
                        <input type="text" className="form-control text-capitalize"
                         placeholder="Add a todo item" value={this.props.item}
                         onChange={this.props.handleChange}/>
                    </div>
                    <button type="submit" className={
                        this.props.editItem 
                        ? "btn btn-block btn-success mt-3"
                        :" btn btn-block btn-dark mt-3"
                    }>
                    {this.props.editItem ? "edit item " : "add item"}
                    </button>
                </form>
            </div>
        )
    }
}
 

export default  TodoInput;