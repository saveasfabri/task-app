import { TiDelete } from 'react-icons/ti';

const Task = ({ id, title, dayDate, monthDate, completed, deleteTask }) => {

  return (
    <div className="task">
      <div className='date-form'>
        <p className='dayDate'>{dayDate}</p>
        <p className='monthDate'>{monthDate}</p>
      </div>
      <h2 className='title-task'>{title}</h2>
      <div className='icon-delete-task' onClick={()=>deleteTask(id)}>

        <TiDelete className='icon'/>
        
      </div>
      <p>{completed}</p>
    </div>
  );
}

export default Task;