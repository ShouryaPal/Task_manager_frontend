import "./App.css";
import { addTask, getAllTask, updateTask, deleteTask } from "./utils/handleApi";
import Task from "./components/task";
import { useDebugValue, useEffect, useState } from "react";

const App = () => {
  const [task, setTask] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
    getAllTask(setTask);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTaskId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Task Manager</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Task......"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateTask(taskId, text, setTask, setText, setIsUpdating)
                : () => addTask(text, setText, setTask)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {task.map((item)=> <Task 
          key={item._id}
          text={item.text}
          updateMode={() => updateMode(item._id ,item.next)}
          deleteTask={() => deleteTask(item._id , setTask)}  
          />)}
        </div>
      </div>
    </div>
  );
}

export default App;
