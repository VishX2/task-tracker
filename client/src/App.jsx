import { useState } from "react";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import Counter from "./components/Counter";
import AddTaskForm from "./components/AddTaskForm";

function App(){

  const [tasks,setTasks] = useState([{id:1,title:'Learn React',due:'Friday'},
                                    {id:2,title:'Push to GitHub',due:'Today'},
                                    {id:3,title:'Study Spring Boot',due:'Next Month'},
  ]);

  function handleAdd(text){
    const newTask = {
      id: Date.now(),
      title: text,
      due:'',
    }
    setTasks([...tasks,newTask])
  }

  return(
    <div className = "min-h-screen bg-gray-100">
      <Header/>
      <AddTaskForm onAdd={handleAdd}/>
      <main className="mx-auto max-w-xl p-6 space-y-3 p-6">
      {tasks.map((task) => (
        <TaskCard key={task.id} title={task.title} due={task.due} />
      ))}
      {
        tasks.length === 0 &&(
          <p className="text-center text-gray-500">No tasks yet. Add one above!</p>
        )
      }
      </main>
    </div>
  );
}

export default App;