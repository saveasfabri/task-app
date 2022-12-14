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
  };

  const completedTask = (id) => {
    const updates = tasks.map(task =>{
      if (task.id === id) {
        task.completed = !task.completed
      };
      return task;
    });
    setTasks(updates);
  };

  return (
    <div className="main-taskList">
      <TaskForm sendTask={addTask}/>
      <div className="container-main-tasks">
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
              completedTask={completedTask}
            />
          )
        })}

      </div>   
    </div>
  );
}

export default TaskList;