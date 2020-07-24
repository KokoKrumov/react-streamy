import React from 'react';
// import {BrowserRouter, Route, Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

function Header() {
    return (
        <div className="Header">
            <GoogleAuth />
        </div>
    );
}

export default Header;
