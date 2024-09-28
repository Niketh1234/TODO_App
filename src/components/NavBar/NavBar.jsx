import './NavBar.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navBarContainer">
        <div
          className="appHeader"
          onClick={() => {
            navigate('/');
          }}
        >
          My ToDo App
        </div>
        <div>
          <button
            className="navButton"
            onClick={() => {
              navigate('/add-task');
            }}
          >
            Add Task
          </button>
          <button
            className="navButton"
            onClick={() => {
              navigate('/show-tasks');
            }}
          >
            Show Tasks
          </button>
        </div>
      </div>
    </>
  );
}
export default NavBar;
