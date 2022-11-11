import React from 'react';
import useTitles from '../../hooks/useTitles';

const Login = () => {
  // page title
  useTitles('Login');
  return (
    <div>
        <h1>Login Page</h1>
    </div>
  )
}

export default Login