import { useState } from "react";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [task, setTask] = useState ([]);

  return (
    <div className="main-taskList">
      <TaskForm />
      <div className="container-tasks">
        
      </div>   
    </div>
  );
}

export default TaskList;