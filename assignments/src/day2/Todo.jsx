import React from "react";

import {useState} from "react";

const Todo = () => {
    const [task, setTask]=useState("");
    const[todo,setTodo]=useState([])
    const handleChange=(e)=>{
          setTask(e.target.value)
    }
    const handleClick=()=>{
            setTodo([...todo,task]);
    }
    // const co = () => {
    //     background : blue;
    // }

    return (
        <>
        {todo.map((item)=>{
            return (
               <span> <h1 className="things" >{item}</h1> </span>

            )
        })}
         <input type="text" value={task} placeholder="Write to Add.." onChange={handleChange}/>
         <button onClick={handleClick} >+</button>

        </>
    )
}
export default Todo
