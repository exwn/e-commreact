import "./App.css";
import Layout from "./components/Layout";
import Detail from "./components/Detail";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail" element={<Detail/>}/>
    </Routes>
    
  );
}

export default App;
