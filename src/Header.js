import React from "react";
import logo from './images/logo.png';

export default function Header(props) {

    function toggleMenu() {
        document.querySelector('.menu').classList.toggle('active');
    }

    return (
        <>
            <header className="header">
                <a href="/"><img src={logo} className="logo"></img></a>
                <button className="menu-button" onClick={toggleMenu}></button>
            </header>



        </>

    )
}