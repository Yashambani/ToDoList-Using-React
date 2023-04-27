import {React, useState, useMemo,useEffect} from "react";

const Todo=(props)=>{
const [todoTitle,setTodoTitle]=useState("");
const [todoDescription,setDescription]=useState("");
let newItem={title:"",description:""};
const onSubmitClick=()=>{

newItem.title=todoTitle;
newItem.description=todoDescription;
props.newItem(newItem.title,newItem.description);
}


return(
<div>
    <form className="container">
    <h1>Todo List</h1>
    <label>Todo Title</label>
    <input value={todoTitle} className="form-control" onChange={(e)=>{setTodoTitle(e.target.value)}} ></input>
    <label>Todo Description</label>
    <input value={todoDescription} className="form-control" onChange={(e)=>{setDescription(e.target.value)}}></input>
    <input type="button" className="mt-2 btn btn-success" onClick={onSubmitClick} value="Add"></input>
    </form>
</div>
);
}
export default Todo;