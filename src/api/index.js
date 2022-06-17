import axios from 'axios';

const API = axios.create({ baseURL:'http://localhost:5000' })

export const fetchPosts = () => API.get("/posts"); 
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, postData) => API.patch(`/posts/${id}`, postData);
export const likePost = (id) => API.patch(`posts/${id}/likePost`);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const login = (loginData) => API.post(`/users/login`, loginData);
export const registered = (loginData) => API.post(`/users/registered`, loginData);