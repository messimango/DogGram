import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, registered } from '../actions/login';


const Login = () => {

    const initialState = { firstName: "", lastName: "", password: "", cpassword: "", email: "" }

    const [register, setRegister] = useState(false);
    const [loginData, setLogData] = useState(initialState)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(register) {
            dispatch(registered(loginData, navigate))
        } else {
            dispatch(login(loginData, navigate))
        }
    };

    const handleChange = (e) => {
        setLogData({ ...loginData, [e.target.name]: e.target.value })
    };

    const change = () => {
        setRegister((prevIsRegister) => !prevIsRegister);
    };

  return (
    <div className="login-page shadow p-3 mb-5 bg-white rounded">
      <h1>{register ? 'Register' : "LogIn"}</h1>
        <div>
            {register ? (
                <form className='register-form' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName" autoFocus>First Name</label>
                        <input onChange={handleChange} type="text" className="form-control" id="firstName" required name="firstName" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName" >Last Name</label>
                        <input onChange={handleChange} type="text" className="form-control" id="lastName" required name="lastName" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={handleChange} className="form-control" id="password" required name="password" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" onChange={handleChange} className="form-control" id="cpassword" required name="cpassword" />
                    </div>                    

                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" onChange={handleChange} className="form-control" id="email" required name="email" />
                    </div>

                    <button type='submit' className="btn btn-success">Register</button>
                    <br></br>
                    <br></br>
                    <button onClick={change} className='btn btn-outline-primary btn-sm'>Go Back</button>
                </form>
            ) : (
            <div className='login-form'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={handleChange} className="form-control" id="email" required name="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={handleChange} className="form-control" id="password" required name="password" />
                    </div>
                    <br></br>
                    <button type='submit' className="btn btn-success btn-lg">Login</button>
                    <br></br>
                    <br></br>
                    <button onClick={change} className='btn btn-outline-primary btn-sm'>Register?</button>
                </form>
            </div>
            )}
        </div>
    </div>
  )
}

export default Login