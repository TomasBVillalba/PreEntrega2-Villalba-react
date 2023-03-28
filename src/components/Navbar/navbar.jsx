import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = ({children}) => {
    const [categorias, setCategorias] = useState ([]);
    const activeStyle = {color: "black"};

    useEffect(() => {
        fetch('/src/data/stockCategoria.json')
            .then(response => response.json())
            .then(data => setCategorias(data))
    }, []);


return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container">
        <Link to="/" className="navbar-brand">
            <a class="navbar-brand" href="index.html">
                <img src="./logomartele.jpg" width="110" height="80" className="logo-brand" alt="logo"/>
            </a>
        </Link>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
                {categorias.map((categoria, index) => (
                <NavLink
                key={index}
                to={`categoria/${categoria.name}`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                >
                <li className="nav-item">{categoria.name}</li>
                </NavLink>
            ))}
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to="/cart" className="nav-link">
                <i className="fa fa-shopping-cart"></i>
            </Link>
            </li>
        </ul>
        </div>
    </div>
    {children}
    </nav>
);
};

export default Navbar;
