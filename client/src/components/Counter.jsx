import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);

    return(
        <button onClick={()=>setCount(count+1)}
        className = "rounded bg-indigo-600 px-4 py-2 text-white"
        >
            Clicked {count} times
        </button>
    );
}
export default Counter;