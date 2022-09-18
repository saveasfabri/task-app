import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task"

const TaskList = () => {
  const [tasks, setTasks] = useState ([]);

  const addTask = (task) => {
    //trim() quita los especios al principio y al final
    if (task.title.trim()){
      task.title = task.title.trim();
      const updatedTask = [task, ...tasks];
      setTasks(updatedTask)
    }
  }

  const deleteTask = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  }

  return (
    <div className="main-taskList">
      <TaskForm sendTask={addTask}/>
      <div className="container-tasks">
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              dayDate={task.dayDate}
              monthDate={task.monthDate}
              completed={task.completed}
              deleteTask={deleteTask}
            />
          )
        })}

      </div>   
    </div>
  );
}

export default TaskList;