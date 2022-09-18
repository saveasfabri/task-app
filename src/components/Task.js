import { TiDelete } from 'react-icons/ti';

const Task = ({ id, title, date, completed, deleteTask }) => {

  return (
    <div className="task">
      {/* <p>{id}</p> */}
      <h2 className='title-task'>{title}</h2>
      <p className='date-task'>{date}</p>
      <p>{completed}</p>
      <div onClick={()=>deleteTask(id)}>
        <TiDelete className='icon-delete'/>
      </div>
    </div>
  );
}

export default Task;