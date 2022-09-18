import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({sendTask}) => {

  const [input, setInput] = useState("");

  const dayDate = new Date();
  const monthDate = new Date();

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
      dayDate: `${(dayDate.getDate())}`.padStart(2,'0'),//días menores a 10 se ven 09
      monthDate: `${(monthDate.getMonth() +1)}`.padStart(2,'0'),//meses menores a 10 se ven 09
      completed: false,
    };
    sendTask(newTask);
    event.target.reset(); // Para resetear el input al clickear submit
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input-form"
        maxlength="20"
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