import React, { Component } from 'react'
import  "bootstrap/dist/css/bootstrap.min.css"
import {v4 as uuid} from "uuid";
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList'
///showing vs-code github setup

class App extends Component {
   
   state={
     items:[],
    id:uuid(),
    item:'',
    editItem:false
   };
 handleChange=(e)=>{
   this.setState({
     item: e.target.value
   });

 }  
 handleSubmit=(e)=>{
 e.preventDefault();
 const newItem = { 
   id:this.state.id,
   title: this.state.item
 };
 const updateItem =[...this.state.items,newItem];

 this.setState({
   items:updateItem,
   item: '',
   id: uuid(),
   editItem:false
 }, ()=>console.log(this.state));
}  
clearList =()=>{
   this.setState({
     items: []
   });
}  
handleEdit=(id)=> { 
  const filteredItems = this.state.items.filter( item=>item.id !==id);
  const selectedItem = this.state.items.find(item=>item.id === id);
 this.setState({
    items:filteredItems,
    item:selectedItem.title,
    id:id,
    editItem:true
 })
}  
handleDelete=(id)=>{
  const filteredItems = this.state.items.filter( item=>item.id !==id);
  this.setState({
    items:filteredItems
  });
}  
  render() {
    
    return (
      <div>
        <div className="container">
          <div className="row"> 
          <div className="col-10 mx-auto col-md-8 m-5">
            <h3 className="text-capitalize text-center">
            todo input
            </h3>
            <TodoInput item={this.state.item}        handleChange={this.handleChange}         handleSubmit={this.handleSubmit}          handleEdit={this.handleEdit} editItem={this.state.editItem} />
            <Todolist items={this.state.items}         handleDelete={this.handleDelete}            clearList={this.clearList}
            handleEdit={this.handleEdit}/>
          </div>
           
          </div>

        </div>
      </div>
    )
  }
}
export default App