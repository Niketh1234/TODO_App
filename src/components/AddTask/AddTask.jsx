import './AddTask.css';
import { useContext, useState } from 'react';
import { TaskContext } from '../Context/TaskContext';
import Toast from '../Toast/Toast';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { tasks, setTasks } = useContext(TaskContext);
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    if (title && description) {
      setTasks([...tasks, { title: title, description: description }]);
      setTitle('');
      setDescription('');
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  };

  return (
    <div className="mainContainer">
      {visible && <Toast message="Task added successfully" />}
      <div className="heading">Add a Task :</div>
      <label>Title : </label>
      <input
        placeholder="Enter the title of your task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description : </label>
      <textarea
        placeholder="Enter the description of your task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddTask;
