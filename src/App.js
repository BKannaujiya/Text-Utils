// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  //   setInterval(() => {
  //     document.title = "TextUtils  is Amazing";
  //   }, 2000);
  //   setInterval(() => {
  //     document.title = "Install TextUtils";
  //  }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743'; //#042743
      showAlert("dark mode has been enabled" , "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("dark mode has been disabled" , "success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element= {<About />}/> */}
          {/* <Route exact path="/" element={<Form showAlert={showAlert} heading='Enter the text below to analyze...' mode={mode}/>}/> */}
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    <Form showAlert={showAlert} heading='Enter the text below to analyze...' mode={mode}/>
    </>
  );
}
// copyright section and footer
export default App;
