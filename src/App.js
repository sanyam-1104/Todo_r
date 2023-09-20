// import logo from './logo.svg';
// //import './App.css';
// import Login from './Screens/Login';
// import Signup from './Screens/Signup';
// import TaskList from './Screens/TaskList';
// // import React,{useState,useRef} from 'react';

// import {
//   BrowserRouter as Router,
//  Routes,
//    Route
// } from "react-router-dom";


// function App() {
//   return (
//     <>
//        <Router>
//       <Routes>
//         <Route exact path="/" element={<Signup/>}></Route>
//         <Route exact path="/login" element={<Login/>}></Route>
//       </Routes>
//     </Router>
//       {/* <Signup /> */}
//     </>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;


