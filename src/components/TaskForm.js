import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({sendTask}) => {
  const [input, setInput] = useState("");

  const dayDate = new Date();
  const monthDate = new Date();

  const handleChange = (event) => {

    /* Devuelve el input con primera letra mayuscula y luego */
    const InputFormatted = event.target.value;
    function capitalizeTheFirstLetter(input) {
      return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    };
    capitalizeTheFirstLetter(InputFormatted);

    setInput(capitalizeTheFirstLetter(InputFormatted));
  };

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
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <div className="container-input-btn">
        <input
          className="input-form"
          maxLength="50"
          type="text"
          name="text"
          placeholder="Write your task..."
          onChange={handleChange}
        />
        <button className="btn-form">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;