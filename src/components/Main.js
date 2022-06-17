import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Form from './Form';
import Search from './Search';

import { useDispatch } from "react-redux";
import { getPosts } from '../actions/posts'

const Main = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);

  return (
    <div>
        <Search />

        <div className='content'>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            <Posts setCurrentId={setCurrentId}/>
        </div>
    </div>
  )
}

export default Main