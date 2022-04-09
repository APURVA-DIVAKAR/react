
const List = () =>{
    const[task,setTask] = React.useState("");

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    return (
      <>
       <input type="text" value={task} placeholder="Enter"/>
       <button>ADD</button>
      </>
    )   
   
}


export {List}