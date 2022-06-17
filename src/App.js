import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {


  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
