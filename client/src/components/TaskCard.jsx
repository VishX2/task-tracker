import { useState } from "react";

function TaskCard({title,due}){

    const[done,setDone] = useState(false);

    return(
        <div className="rounded-lg bg-white p-4 shadow">
            <h2 className={done? "font-semibold line-through":"font-semibold"}>{title}</h2>
            <p className="text-sm text-gray-500">Due: {due}</p>
            <button onClick={()=>setDone(!done)}
            className="mt-2 text-sm text-indigo-600">{done?"Undo":"Mark down"}</button>
        </div>
    );
}
export default TaskCard;