import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.jpg'
import Posts from './components/Posts';
import Form from './components/Form';
import Search from './components/Search';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className='App'>
      <div className="nav shadow p-3 mb-5 bg-white rounded">
          <div className='title' bg="dark" variant="dark">
              <img src={logo} />
              <h1>DogGram</h1>
          </div>
      </div>

      <Search />

      <div className='content'>
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
      <Posts setCurrentId={setCurrentId}/>
      </div>




    </div>
  )
}

export default App;
