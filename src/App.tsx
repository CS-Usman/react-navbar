import React from 'react';
import Navbar from './components/navbar/Navbar';
import {Route ,Routes} from "react-router-dom";
import Login from './pages/login/Login';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Notification from './pages/notification/Notification';

const App = ()=> {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Notification" element={<Notification/>}/>
      </Routes>
    </div>
  );
}

export default App;
