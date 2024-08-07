import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom"; 

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contatos</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;

