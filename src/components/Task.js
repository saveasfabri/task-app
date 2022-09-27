import { TiDelete } from 'react-icons/ti';

const Task = ({ id, title, dayDate, monthDate, completed, deleteTask, completedTask }) => {

  return (
    <div className= "task animate__animated animate__bounceInDown animate__faster">
      
      <div className={completed ? 'date-form bg-date-completed' : "date-form"}>
        <p className='dayDate'>{dayDate}</p>
        <p className='monthDate'>{monthDate}</p>
      </div>
      <h2 className={completed ? 'title-task completed bg-completed' : "title-task"} onClick={()=> completedTask(id)}>
        {title}
      </h2>
      <div className={completed ? 'icon-delete-task completed bg-completed' : "icon-delete-task"} onClick={()=>deleteTask(id)}>        
        <TiDelete className='icon' /* svg icon */ />     
      </div>
    </div>
  );
}

export default Task;