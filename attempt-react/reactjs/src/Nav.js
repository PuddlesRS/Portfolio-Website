import React from 'react';

function Nav() {
    return (
        <Navbar>
            <NavItem title="Ryan Smith_" link="index.js" className="rs" />
            <NavItem title="Projects" link="#" />
            <NavItem title="Resume" link="#" />
            <NavItem title="About Me" link="#" />
        </Navbar>
  );
}

function Navbar(props, link) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav"> {props.children} </ul>
        </nav>
        );
}

function NavItem(props) {
    return (
        <li className="nav-item" >
            <a href={props.link} className="icon-button">
                {props.title}
            </a>
        </li>
        );
}



export default Nav;



