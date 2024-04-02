import React from 'react'
import "../styles/Information.scss"
import info1 from "../assets/info1.svg"
import info2 from "../assets/info2.svg"
import info3 from "../assets/info3.svg"
import info4 from "../assets/info4.svg"
import info5 from "../assets/info5.svg"
import info6 from "../assets/info6.svg"

export default function Information() {
    return (
        <>
            <section id="information">
                <div id="tittle-info">
                    <h1>FIQUE POR DENTRO!</h1>
                    <p>Entenda mais sobre <span className="blue-info">exames, rotas e atividades do ICR</span></p>
                </div>

                <div id="all-infos">
                    <div id="cont-info1" className="container">
                        <div className="first">

                            <div id="desk-images">
                                <img src={info1} alt="info1" className="desktop-img" />
                                <img src={info2} alt="info2" className="desktop-img" />
                                <img src={info3} alt="info3" className="desktop-img" />
                                <img src={info4} alt="info4" className="desktop-img" />
                                <img src={info5} alt="info5" className="desktop-img" />
                                <img src={info6} alt="info6" className="desktop-img" />
                            </div>
                            

                            <div id="mobile-images">
                                <div className="mobile-cont">
                                    <img src={info1} alt="info1" className="mobile-img" />
                                    <img src={info2} alt="info2" className="mobile-img" />
                                    <img src={info3} alt="info1" className="mobile-img" />
                                </div>

                                <div className="mobile-cont">
                                    
                                    <img src={info4} alt="info2" className="mobile-img" />
                                    <img src={info5} alt="info1" className="mobile-img" />
                                    <img src={info6} alt="info2" className="mobile-img" />
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
