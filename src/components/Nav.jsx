import '../styles/Nav.scss'
import img from "../assets/nav-icon.svg";


export default function Nav() {
    return(
        <>
        <header>
            <nav>
                <div id="cont-nav">
                    <img src={img} alt="img-nav"/>
                    <ul id="list-nav">
                        <li className="nav-li">Início</li>
                        <li className="nav-li">Sobre o ICR</li>
                        <li className="nav-li">Blog</li>
                        <li className="nav-li">Contato</li>
                    </ul>
                </div>
                <button id="nav-button">BAIXE O APLICATIVO</button>
            </nav>
        </header>
        </>
    )
}