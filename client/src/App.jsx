import Header from "./components/Header";
import TaskCard from "./components/TaskCard";

function App(){

  return(
    <div className = "min-h-screen bg-gray-100">
      <Header/>
      <main className="mx-auto max-w-xl p-6 space-y-3 p-6">
      <TaskCard title="Learn React" due = "Friday"/>
      <TaskCard title="Push to GitHub" due = "Today"/>
      <TaskCard title="study Spring Boot" due = "Next Month"/>
      </main>
    </div>
  );
}

export default App;