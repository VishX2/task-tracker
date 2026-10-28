import {useState} from 'react';

function AddTaskForm({onAdd}){
    const [text,setText] = useState("");

    function handleSubmit(e){
        e.preventDefault()
        if(text.trim()==="")return
        onAdd(text)
        setText("")
    }
    

    
    return(
        
        <form onSubmit ={handleSubmit} className='flex gap-2'>
                <input type="text"
                value = {text}
                onChange = {(e)=>setText(e.target.value)}
                placeholder='New task ...'
                className='flex-1 rounded border border-gray-300 p-2'/>
                <button className='rounded bg-indigo-600 px-4 text-white'>Add</button>

        </form>
            

        
    );

}
export default AddTaskForm;