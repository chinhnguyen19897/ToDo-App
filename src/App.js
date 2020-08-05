import React, { Component } from 'react';
import './App.css';
import TodoItem from './component/todoitems'
import list from './img/down-arrow.svg';


class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      todoItems: [
        {title: 'cơm' , isComplete : false},
        {title: 'mỳ' ,isComplete : false},
        {title: 'phở' }
    ]
   }

   this.onKeyUp = this.onKeyUp.bind(this);
   this.onChange = this.onChange.bind(this);
  }
  onItemClicked(items) {
   return(event) => {
     const isComplete = items.isComplete;
     const { todoItems } = this.state;
     const index = todoItems.indexOf(items);
     this.setState({
       todoItems: [
        ...todoItems.slice(0,index),
        {
          ...items,
          isComplete: !isComplete
        },
        ...todoItems.slice(index + 1) 
       ]
     })
   }
  }
  onKeyUp(event) {    
      if (event.keyCode === 13){
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {return;}

      this.setState({
        newItem: '',
        todoItems: [
          {title: text, isComplete: false },
          ...this.state.todoItems
        ]
      })
    }
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }
  render(){
    const { todoItems, newItem } = this.state;
  return (
    <div className="App">
        <div className="Header">
            <img src={list} width='32' height='32'/>
            <input type="text" 
            placeholder="Add a new item" 
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}/>
           
    </div> 
            
           { todoItems.length > 0 && todoItems.map((items, index) => 
            <TodoItem 
            items={items} 
            key={index}
            onClick={this.onItemClicked(items)} />
            )
          }
        </div>
         
    
    
    );
        }
  }


export default App;
