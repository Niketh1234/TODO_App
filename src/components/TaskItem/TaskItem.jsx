import './TaskItem.css';
function TaskItem(props) {
  const deleteHandler = () => {
    props.sendData(props.id);
  };

  return (
    <div className="taskItemContainer">
      <div className="itemContainer">
        <p>Task {props.id + 1}</p>
        <h4>{props.title}</h4>
      </div>
      <div>
        <button className="deleteButton" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default TaskItem;
