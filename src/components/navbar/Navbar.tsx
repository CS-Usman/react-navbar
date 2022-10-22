import React,{ useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import Notification from "../../pages/notification/Notification";

function Navbar() {
  const [size, setSize] = useState([0, 0]);
  const [click,setClick] = useState(false);
  const updateSize = () => {
    setSize([window.innerWidth/2, window.innerHeight/2]);
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div>
        <nav>
            <div className={styles.brandTitle}><h2>NavBar</h2></div>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <button onClick={() => {
                    setClick( prev => !prev)
                }}>Notifications</button>
                
            </ul>
        </nav>
        {click && (<div style={{width : size[0],height:size[1], border:"2px solid red"}}>
            <Notification/>
        </div>)}
    </div>
  );
}

export default Navbar;