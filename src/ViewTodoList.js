import React, { useState } from "react";

const ViewTodoList=(props)=>{
    function deleteFunction(index){
        console.log(index);
        props.del(index);
    }
    console.log(props.data);
    return(
        <div className="container mt-4">
            <div className="row">
            <h1>List</h1>
            </div>
            <div className="row border-top">
            {
              props.data.length===0?<h5>No items to display</h5>:props.data.map((item,key)=>{
                return(<div className="border-bottom" key={key}>
                <div className="row mt-2"> <div className="col"><div className="row"><div className="col"><h3>{item.title}</h3></div></div></div> </div>
                <div className="row mt-2"> <div className="col"><div className="row"><div className="col">{item.description}</div></div></div> </div>
                   
                    <div className="row">
                    <div className="col">
                    <input type="button" className="btn btn-danger mt-2 mb-3" value="Delete" onClick={()=>{deleteFunction(key)}} ></input></div></div>
                </div>);
            })
            }</div>
        </div>

    );
}
export default ViewTodoList