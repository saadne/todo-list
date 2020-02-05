import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends React.Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }
  handleChange = (event) =>{
    event.preventDefault()
    this.setState({
      item:event.target.value
    })
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    const newItem ={ 
      id:this.state.id,
      title:this.state.item
    }
    console.log(newItem)
    const updateItems = [...this.state.items, newItem]
    this.setState({
      items:updateItems,
      id:uuid(),
      item:'',
      editItem:false
    })
  }
  clearList = () => {
    this.setState({
      items:[]
    })
  }
  handleDelete = (id) =>{
    const filterItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filterItems
    })
  }
  handleEdit = (id) =>{
    const filterItems = this.state.items.filter(item => item.id !== id)
    const selected = this.state.items.find(item => item.id === id)
    console.log(selected)
    this.setState({
      items: filterItems,
      item:selected.title,
      editItem:true,
      id:id
    })
  }
  render(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
            Todo Input
          </h3>
        <TodoInput item={this.state.item} handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} editItem = {this.state.editItem}/>
        <TodoList items={this.state.items} clearList={this.clearList}
        handleDelete = {this.handleDelete}
        handleEdit = {this.handleEdit}
         />
        </div>
      </div>
    </div>   
  );
  }
}

export default App;
