import {useState,useEffect} from 'react';

function Header(){

    const [now,setNow] = useState(new Date())
    
    useEffect(()=>{
        const id = setInterval(()=>setNow(newDate()),1000)
        return() => clearInterval(id);
    },[])

    return(
        <header className="bg-indigo-600 p-6 text-white">
            <h1 className="text-3xl font-bold">Task Tracker</h1>
            <p className="text-indigo-200">{now.toLocaleDateString()}</p>
        </header>

    );
}
export default Header;