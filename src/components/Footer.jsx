import React from 'react'
import "../styles/Footer.scss"
import linkedin from "../assets/linkedin.svg"
import insta from "../assets/insta.svg"
import face from "../assets/face.svg"
import wpp from "../assets/wpp.svg"
import email from "../assets/email.svg"
import logo from "../assets/logo-icr.svg"
import apple from "../assets/apple.svg"
import google from "../assets/google.svg"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";



export default function Footer() {
    return (
        <>
        <footer>
            <div id="content-left">
                    
                    
                    <div id="download-app">
                        <h1>Baixe o nosso app</h1>
                        <div id="down">
                            <img src={apple} alt="apple" />
                            <img src={google} alt="goole" />
                        </div>
                    </div>
                </div>

            <div id="cont-footer">
                <div id="social-medias">
                    <FaLinkedin id='imgf'/>
                    <FaInstagram id='imgf'/>
                    <FaFacebookSquare id='imgf'/>
                    <FaWhatsapp id='imgf'/>
                    <CiMail id='imgf'/>
                </div>
                <div id="logo-icr">
                    <img src={logo} alt="logo-icr" />
                </div>
                <div id="info-footer">
                    <p>
                        FIAP - Challenge 2023/2024
                        design by joraysuke
                    </p>
                </div>
            </div>
            

            
        </footer>
        
        </>
    )

}