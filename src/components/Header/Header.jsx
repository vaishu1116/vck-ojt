import React from "react";
import { Link } from 'react-router-dom'
const Header = () => {
    return(
        <header class="header">
            <nav>
                <Link to="/home" class="nav">Home</Link> 
                <Link to="/about" class='nav'>About</Link>
                <Link to="/cources" class="nav">Courses</Link>
                <Link to="/contact" class="nav">Contact</Link>
                <a class="btn" href="/addmission" data-discover="true">Apply Now</a>
            </nav>
        </header>
    )
}
export default Header