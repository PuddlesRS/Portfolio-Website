import React from 'react';
import { Link, Outlet } from "react-router-dom";
function Nav() {
    return (
        <>
            <Navbar>
                <NavItem title="RYAN SMITH_" to="/"/>
                <NavItem title="PROJECTS" to={"/projects"}/>
                <NavItem title="RESUME" to="/resume"/>
                <NavItem title="ABOUT ME" to="/about-me"/>
            </Navbar>

            <Outlet />
        </>
  );
}

function Navbar(props) {
    return (
        <nav className="navbar-container">
            <ul className="navbar"> {props.children} </ul>
        </nav>
        );
}

function NavItem(props) {
    return (
        <li className="nav-item" >
            <Link title={`${props.title }`} to={`${props.to}`}>
                {props.title}
            </Link>
        </li>
        );
}

export default Nav;



