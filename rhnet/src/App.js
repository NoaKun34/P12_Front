import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Employees from './Pages/Employees.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
