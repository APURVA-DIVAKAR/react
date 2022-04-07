

import { useState } from "react";

const Page = () => {
    const[count,setCount] = useState(0);
    const handleINC = () => {
        setCount((prevState)=>prevState+1);
    }
    const handleDEC = () => {
        setCount(count-1);
    }
    const handle2 = () => {
        setCount(count*2);
    }

     return(
         <>
          <h1>{count}</h1>
          <button onClick={() => handleINC()}>Increment</button>
          <button onClick={() => handleDEC()}>Decrement</button>
          <button onClick={() => handle2()}>Double</button>
         </>
     )
}

export default Page;