import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route,useParams, useLocation} from "react-router-dom";
import axios from "axios"; 
import Home from "./home";
import Task from "./task";
import Navbar from "./navBar";
import Footer from "./footer"
import Contact from "./contact";

function SingleTask() {
  const [task, setTask] = useState([]);
  const { taskId } = useParams();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    try {
      async function fetchTask() {
        const response = await axios.get(
          `https://dummyjson.com/todos/${taskId}`
        );
        // console.log(response.data);

        setTask(response.data);
      }

      fetchTask();
    } catch (err) {
      console.error(err);
    }
  }, [taskId]);

  return (
    <div>
    <ul>
      <h1>Task {task.id}</h1>
      <p>{task.todo}</p>
      <p>{task.completed}</p>
    </ul>
    </div>
  );
}







function App() {
  return (
    <Router>
      <div id="app" className="theme">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/task/:taskId" element={<SingleTask />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <br></br><br></br>
        <Footer />
      </div>
    </Router>
  );
}

export default App;