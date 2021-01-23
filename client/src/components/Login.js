import React, { useState } from "react";
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const changeHandler = e => {
    e.preventDefault();
    setCredentials({
      // is this format correct?
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitForm}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={credentials.username}
          onChange={changeHandler}
        />
        <input
          type='text'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={changeHandler}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
