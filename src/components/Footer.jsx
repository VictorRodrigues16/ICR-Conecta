import "../styles/Footer.scss"
import linkedin from "../assets/linkedin.svg"
import insta from "../assets/insta.svg"
import face from "../assets/face.svg"
import wpp from "../assets/wpp.svg"
import email from "../assets/email.svg"
import logo from "../assets/logo-icr.svg"

export default function Footer() {
    return (
        <>
        <footer>
            <div id="social-medias">
                <img src={linkedin} alt="linkedin" />
                <img src={insta} alt="instagram" />
                <img src={face} alt="facebook" />
                <img src={wpp} alt="whatsapp" />
                <img src={email} alt="e-mail" />
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
        </footer>
        
        </>
    )

}