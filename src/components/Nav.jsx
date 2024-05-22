import React, { useState, useEffect, useCallback } from "react";
import "../styles/Nav.scss";
import img from "../assets/nav-icon.svg";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const MenuItem = ({ href, children }) => (
    <li className="nav-li">
        {href ? <a href={href}>{children}</a> : children}
    </li>
);

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const checkWindowSize = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", checkWindowSize);
        return () => window.removeEventListener("resize", checkWindowSize);
    }, [checkWindowSize]);

    const toggleMenu = useCallback(() => {
        const listNav = document.getElementById("list-nav");
        if (windowWidth <= 530) {
            setIsOpen(!isOpen);
        }
        if (isOpen) {
            listNav.style.display = "none";
        }else{
            listNav.style.display = "flex";
        } [isOpen, windowWidth]});


    return (
        <header>
            <nav>
                <div id="cont-nav">
                    <img id="icon-nav" src={img} alt="img-nav" />
                    <ul id="list-nav" className={isOpen ? "open" : ""}>
                        <button onClick={toggleMenu} className="close-icon">
                            <AiOutlineClose />
                        </button>
                        <MenuItem><Link to="/" className="Link">Início</Link></MenuItem>
                        <MenuItem href="/#Ourapp">Sobre o ICR</MenuItem>
                        <MenuItem><Link to="/exames" className="Link">Exames</Link></MenuItem>
                        <MenuItem href="/#form">Contato</MenuItem>
                    </ul>
                </div>
                <button onClick={toggleMenu} className="hamburguer-icon">
                    <TiThMenu />
                </button>
            </nav>
        </header>
    );
}
