import { TaskContext } from '../Context/TaskContext';
import { useContext, useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './ShowTasks.css';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast/Toast';

function ShowTasks() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const taskcontext = useContext(TaskContext);
  const { tasks, setTasks } = taskcontext;

  const handleDelete = (data) => {
    setTasks(tasks.filter((item, index) => index != data));
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  return (
    <div className="mainContainer">
      <h1 className="heading">Your Tasks :</h1>
      {visible && <Toast message="Task deleted successfully" />}
      {tasks.length == 0 && (
        <div className="emptyTasksContainer">
          Oh seems like there are not tasks.
          <div className="emptyTasks" onClick={() => navigate('/add-task')}>
            Add a task
          </div>
        </div>
      )}
      {tasks.map((item, id) => (
        <TaskItem
          key={id}
          id={id}
          title={item.title}
          description={item.description}
          sendData={handleDelete}
        />
      ))}
    </div>
  );
}
export default ShowTasks;
