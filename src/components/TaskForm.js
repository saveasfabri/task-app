import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({sendTask}) => {

  const [input, setInput] = useState("");

  const date = new Date();

  // WIP - handleChange
  const handleChange = (event) => {
    setInput(event.target.value)
    /* console.log("🚀 ~ handleChange ~ event", event)
    console.log("🚀 ~ handleChange ~ event.target", event.target)
    console.log("🚀 ~ handleChange ~ event.target.value", event.target.value) */
  }
  // WIP - handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    /* console.log("🚀 ~ handleSubmit ~ event", event) */
    const newTask = {
      id: uuidv4(),
      title: input,
      date: (date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear()),
      completed: false,
    };
    sendTask(newTask);
    event.target.reset(); // Para resetear el input al clickear submit
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input-form"
        type="text"
        name="text"
        placeholder="Write your task..."
        onChange={handleChange}
      />
      <button className="btn-form">Add Task</button>
    </form>
  );
};

export default TaskForm;