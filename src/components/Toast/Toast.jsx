import './Toast.css';
function Toast(props) {
  return <div className="toastContainer">{props.message}</div>;
}
export default Toast;
