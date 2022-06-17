import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () =>{
        dispatch({ type: 'LOGOUT' });

        navigate('/');
        setUser(null)
    }


    useEffect(() => {
        
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);




  return (
    <div className="nav-bar shadow p-3 mb-5 bg-white rounded">
        <Link to="/">
            <div className='title' bg="dark" variant="dark">
                <img src={logo} />
                <h1>DogGram</h1>
            </div>
        </Link>

        <div className='log'>
            {user ? (
                <div>
                    {/* <img src={user.result.image}>{user.result.name.charAt(0)}</img> */}
                    <h3>{user.result.name}</h3>
                    <button className='logout btn btn-primary' onClick={logout}>Log-Out <i className="fa-solid fa-door-closed"></i></button>
                </div>
            ) : (
                <div>
                    <Link to="/login">
                        <button className='login btn btn-primary'>Log-In <i className="fa-solid fa-door-open"></i></button>
                    </Link>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar