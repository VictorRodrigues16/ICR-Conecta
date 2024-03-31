import "../styles/OurApp.scss"
import cell from "../assets/cell-photo.svg"

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
                        Uma comunidade solidária, onde pacientes 
                        podem se conectar, trocar experiências e 
                        encontrar conforto durante suas jornadas de saúde.
                    </p>
                </div>
                <div id="tittle3">
                    <p>Junte-se a nós para compartilhar, aprender e crescer juntos. </p>
                </div>
            </div>

            <img id="cell-app" src={cell} alt="cell-app" />
        
        </section>
        
        </>
    )

}