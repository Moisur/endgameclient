import { Routes, Route } from "react-router-dom";
import Navbar from '../src/components/pages/shared/Navbar/Navbar'
import Footer from '../src/components/pages/shared/Footer/Footer'
import ToDo from './components/pages/ToDo/ToDo';
import Tasks from "./components/pages/Tasks/Tasks";
import Calendar from "./components/pages/Calendar/Calendar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ToDo/>} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
