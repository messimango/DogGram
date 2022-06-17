import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from "../actions/posts";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({ setCurrentId, currentId }) => {

    const [postData, setPostData] = useState({ name: '', author: "", breed: "", about: '', tags: '', image: ''} );
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId) {
            dispatch(updatePost(currentId, postData));
            clear()    
        } else {
            dispatch(createPost(postData))
            clear()
        }       
    }

    const clear = () => {
        setCurrentId(null);
        setPostData( { name: '', author: "", breed: "", about: '', tags: '', image: ''} )

    }  

    return (
        <div className='form'>
            <div className='form-box shadow p-3 mb-5 bg-white rounded'>
                <h3>{currentId ? 'Edit Post' : 'New Post'}</h3>
                <form className="input-group col-lg-4" onSubmit={handleSubmit}>
                    <div>                                  
                        <label>Dogs Name:
                            <input placeholder='Dogs Name' className="form-control" label="Name" onChange={(e) => setPostData({ ...postData, name: e.target.value })} name="name" value={postData.name}></input>
                        </label>                
                        <label>Dogs Breed:
                            <input placeholder='Dogs Breed' className="form-control" label="Breed" onChange={(e) => setPostData({ ...postData, breed: e.target.value })} breed="breed" value={postData.breed}></input>
                        </label>  
                        <br></br>              
                        <label>About:
                            <textarea rows="3" placeholder='Info about picture' className="form-control about" label="About" onChange={(e) => setPostData({ ...postData, about: e.target.value })} about="about" value={postData.about}></textarea>
                        </label> 
                        <br></br>               
                        <label>Tags:
                            <input placeholder='Tags' className="form-control" id="exampleFormControlTextarea1" rows="3" label="Tags" onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} tags="tags" value={postData.tags}></input>
                        </label>                
                        <label>Author:
                            <input placeholder='Author' className="form-control" label="Author" onChange={(e) => setPostData({ ...postData, author: e.target.value })} author="author" value={postData.author}></input>
                        </label>
                        <br></br>
                        <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, image: base64 })}/>
                        <br></br>
                        <button className="btn btn-danger" onClick={clear}>Clear</button>
                        <button className="btn btn-primary" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
}

export default Form;