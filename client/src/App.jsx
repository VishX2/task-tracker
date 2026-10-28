import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import Counter from "./components/Counter";
import AddTaskForm from "./components/AddTaskForm";

function App(){
  function handleAdd(text){
    console.log("Parent received : ",text);
  }

  return(
    <div className = "min-h-screen bg-gray-100">
      <Header/>
      <AddTaskForm onAdd={handleAdd}/>
      <main className="mx-auto max-w-xl p-6 space-y-3 p-6">
      <TaskCard title="Learn React" due = "Friday"/>
      <TaskCard title="Push to GitHub" due = "Today"/>
      <TaskCard title="Study Spring Boot" due = "Next Month"/>
      <Counter/>
      </main>
    </div>
  );
}

export default App;