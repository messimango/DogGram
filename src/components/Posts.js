import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import { deletePost, likePost } from "../actions/posts";

const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    function deleteFinal(id) {
        dispatch(deletePost(id));
        window.location.reload();
        return false;
    }
    
    return (
        <div className='posts'>
            {posts.map((post, index) => (
                <div className='post shadow p-3 mb-5 bg-white rounded' key={index}> 
                    <div className='post-button'>
                        <button  onClick={() => setCurrentId(post._id)}><i className="fa-solid fa-pen-to-square"></i></button>
                        <button onClick={() => deleteFinal(post._id)}><i className="fa-solid fa-trash"></i></button>
                    </div>

                    <div className='post-content'>
                        <article>
                            <img className='post-image' src={post.image} />
                        </article>
                        
                        <article>                            
                            <h2>{post.name}</h2>
                            <h6>{post.breed}</h6>
                            <h5>{post.about}</h5>
                            <p className='tags'>{post.tags.map((tag) => `#${tag}`)}</p>
                        </article>
                    </div>
                    <div className='post-footer'>
                        <p>{moment(post.date).fromNow()}</p>
                        <button onClick={() => dispatch(likePost(post._id))}><i className="fa-solid fa-heart"></i> {post.like}</button>
                        <p>{post.author}</p>
                    </div>
                </div>
            ))}
        </div>
        
    );
}

export default Posts;