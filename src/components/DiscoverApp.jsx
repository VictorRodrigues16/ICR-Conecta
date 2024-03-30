import "../styles/DiscoverApp.scss"
import cell from "../assets/icon-cell.svg"
import lupa from "../assets/icon-lupa.svg"
import globe from "../assets/icon-globe.svg"

export default function DiscoverApp() {
    return (
        <>
        <section id="discover">
            <div id="tittle-discover">
                <h1>CONHEÇA O APLICATIVO</h1>
                <p>Veja as principais funcionalidades do ICR Conecta</p>
            </div>
            <div id="info-app">
                <div className="box-info">
                    <img src={cell} alt="icon-cell" />
                    <h1>Rede Social</h1>
                    <p>
                        Uma plataforma prática para conectar pacientes,
                        familiares e profissionais de saúde, oferecendo
                        suporte, enfrentar os desafios da saúde juntos.
                    </p>
                </div>

                <div className="box-info">
                    <img src={lupa} alt="icon-lupa" />
                    <h1>Informações e Exames</h1>
                    <p>
                        Um espaço de troca de informações e experiências, 
                        onde você pode encontrar respostas, suporte e 
                        orientações práticas relacionadas à sua saúde e bem-estar
                    </p>
                </div>

                <div className="box-info">
                    <img src={globe} alt="globe-icon" />
                    <h1>Mapas</h1>
                    <p>
                        Encontre facilmente departamentos, salas e 
                        serviços dentro do nosso hospital com a 
                        funcionalidade de mapas interativos.
                    </p>
                </div>
            </div>
        </section>
        
        </>
    )

}