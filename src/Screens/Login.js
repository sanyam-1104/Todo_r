import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
   // console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="App" style={{ backgroundColor: 'darkblue', color: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '400px' }}>
        <h1 style={{ fontSize: '36px', textAlign: 'center' }}>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{marginTop:'15px',height:'30px'}}/>
           <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{marginTop:'15px',height:'30px'}}/>

          <input type="submit" value="Login" style={{marginTop:'15px',height:'35px',background:'black',color:'white',fontSize:'20px',cursor:'pointer'}}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
