import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
const Navbar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.addEventListener('click', ()=>{
            navigate("/");
        }, true);
    }, []);
    return (
        <nav>
            <div className={styles.brandTitle}><h2>NavBar</h2></div>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <button onClick={() => {
                    navigate("/Notification")
                }}>Notifications</button>
            </ul>
        </nav>
    );
};

export default Navbar;