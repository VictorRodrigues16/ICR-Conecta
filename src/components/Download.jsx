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

        <img src={doctor} alt="" />
        </section>
        
        </>
    )

}