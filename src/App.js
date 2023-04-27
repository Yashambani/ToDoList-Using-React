import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import ViewTodoList from './ViewTodoList';
import { useState } from 'react';

const App=()=>{

const [newTodoItem,setNewTodoItem]=useState([]);
let newItem=[];
const createTodoItemList=(t,d)=>{
setNewTodoItem([...newTodoItem,{title:t,description:d}]);
console.log(newTodoItem);
}
const deleteItem=(index)=>{
newItem=[...newTodoItem]
newItem.splice(index,1);
setNewTodoItem(newItem);
}  
  return (
    <div className="App">
      <Todo newItem={createTodoItemList}></Todo>
      <ViewTodoList data={newTodoItem} del={deleteItem}></ViewTodoList>
    </div>
  );
}

export default App;
