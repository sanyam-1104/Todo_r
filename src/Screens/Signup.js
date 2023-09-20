import React, { useState } from 'react';
//import { Link } from 'react-router-dom'; // Import Link from React Router
//import {Link} from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the user with the same username already exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some((user) => user.username === username);

    if (userExists) {
      alert('Username already exists. Please choose a different username.');
    } else {
      // Add user information to local storage
      const newUser = {
        username,
        email,
        password
        
      };

      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      // You can add further signup logic here if needed
      console.log('User registered:', newUser);
      // this.username.value = '';
      // this.email.value='';
      // this.password.value='';
      
    }
  };

  return (
    <div className="App" style={{ backgroundColor: 'darkblue', color: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '400px' }}>
        <h1 style={{ fontSize: '36px', textAlign: 'center' }}>Signup</h1>
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          {/* ... Rest of your form code remains unchanged */}
           <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}  placeholder="Username" style={{marginTop:'15px',height:'30px'}}/>
           <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{marginTop:'15px',height:'30px'}}/>
           <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{marginTop:'15px',height:'30px'}}/>

          <input type="submit" value="Signup" style={{marginTop:'15px',height:'35px',background:'black',color:'white',fontSize:'20px',cursor:'pointer'}}/>
          {/* <Link to="/login"><button type="button" style={{marginTop:'15px',height:'35px',background:'black',color:'white',fontSize:'20px',cursor:'pointer'}}>Alerady a user</button></Link> */}
        </form>
      </div>
    </div>
  );
}

export default Signup;
