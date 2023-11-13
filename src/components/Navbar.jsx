import React from "react";
import airbnb from "../images/airbnb 1.png"

function Navbar(){
    return(
        <nav className="navbar">
            <a href="#"><img src={airbnb} className="nav-logo"/></a>
        </nav>
    )
}

export default Navbar;