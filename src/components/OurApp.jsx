import React from 'react'
import "../styles/OurApp.scss"
import doctor from "../assets/doctor.svg"

export default function  OurApp() {
    return (
        <>
        <section id="Ourapp">
            <div id="cont-app">
                <div id="tittle1">
                    <h2>NÓS SOMOS A</h2>
                    <div id="icr">
                        <h1>ICR CONECTA</h1>
                    </div>
                </div>
                <div id="tittle2">
                    <p>
                        Um aplicativo dedicado a mantê-lo informado sobre seus exames, tratamentos e aperfeiçoar sua experiência no ICR.
                    </p>
                </div>
                <div id="tittle3">
                    <p>Junte-se a nós para compartilhar, aprender e crescer juntos. </p>
                </div>
            </div>

            <img id="cell-app" src={doctor} alt="doctor-cell" />
        
        </section>
        
        </>
    )

}