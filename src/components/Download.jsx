import "../styles/Download.scss"
import doctor from "../assets/doctor.svg";


export default function Download() {
    return (
        <>
        <section id="download">
            <div id="cont-download">
                <div id="cont1">
                    <h1>
                        ACESSE O 
                        <span className="app">
                            APLICATIVO 
                        </span>
                        <span className="conecta">
                            ICR CONECTA  
                        </span>  
                    </h1>
                </div>
                <div id="cont2">
                    <p>
                        Explore recursos inovadores 
                        e torne sua jornada mais fácil 
                        e conveniente.
                    </p>
                </div>
                <button id="baixar-agora">BAIXE AGORA</button>
            </div>

                <img src={doctor} alt="doctor-cell" />
        </section>

        <section id="download2">
            <div id="cont-download2">
                <div id="cont1-2">
                    <h1>
                        ACESSE O 
                        <span className="app">
                            APLICATIVO 
                        </span>
                    </h1>
                    <h2 className="conecta">ICR CONECTA</h2>
                </div>

                <div id="cont2-2">
                    <img src={doctor} alt="" />

                    <div id="info-cont2">
                        <p>
                            <span className="app">Explore recursos inovadores</span>
                            <span className="app">e torne sua jornada mais fácil</span>
                            <span className="app">e conveniente.</span> 
                        </p>
                        <button id="baixar-agora">BAIXE AGORA</button>
                    </div>
                    
                </div>
                
            </div>
        </section>
        
        </>
    )

}