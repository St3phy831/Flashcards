import React from "react";
import './Header.css'

const Header = (props) => {
    return (
        <div className="Header">
           <h2>{props.title}</h2>
           <h4>{props.description}</h4>
        </div>
    );
};

export default Header;