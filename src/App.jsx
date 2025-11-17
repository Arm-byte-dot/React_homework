import { useState } from "react";
import "./App.css";
import List from "./components/List/List.jsx";

function App() {
  const [filter, setFilter] = useState("all");
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const leftToDo = tasks.filter((task) => !task.isDone);
  const count = tasks.length;
  const filterTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.isDone;
    }
    if (filter === "completed") {
      return task.isDone;
    } else {
      return true;
    }
  });
  const submit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    setTasks([...tasks, { id: Math.random(), text, isDone: false }]);
    setText("");
  };
  const onRemove = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  const removeAll = () => {
    setTasks([]);
  };
  const removeCompted = (id) => {
    setTasks(leftToDo.filter((t) => t.id !== id));
  };
  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={submit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <div className="list">
        <ul>
          {filterTasks.map((task) => (
            <List
              key={task.id}
              id={task.id}
              text={task.text}
              isDone={task.isDone}
              onToggle={() => toggleDone(task.id)}
              onRemove={() => onRemove(task.id)}
            />
          ))}
        </ul>
      </div>
      <h1>
        Have To Do: {leftToDo.length}/{count}
      </h1>
      <div className="buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={removeAll}>Delete All</button>
        <button onClick={removeCompted} className="button5">
          Remove All Completed Tasks
        </button>
      </div>
    </>
  );
}

export default App;
