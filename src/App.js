import { Routes, Route } from "react-router-dom";
import Navbar from '../src/components/pages/shared/Navbar/Navbar'
import Footer from '../src/components/pages/shared/Footer/Footer'
import ToDo from './components/pages/ToDo/ToDo';
import Tasks from "./components/pages/Tasks/Tasks";
import Calendar from "./components/pages/Calendar/Calendar";
import Home from "./components/pages/Home/Home";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
