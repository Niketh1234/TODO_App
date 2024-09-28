import './App.css';
import AddTask from './components/AddTask/AddTask';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowTasks from './components/ShowTasks/ShowTasks';
function App() {
  return (
    <>
      <div className="screen">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/add-task" element={<AddTask />}></Route>
            <Route path="/show-tasks" element={<ShowTasks />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
