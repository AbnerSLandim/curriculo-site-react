import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import whatsapp from '../images/whatsapp.png'

import './Footer.css'

function Footer(){
    return(
        <>
        <footer>
            <a href=""><img src={github} alt="GitHubLogo"></img></a>
            <a href=""><img src={linkedin} alt="LinkedinLogo"></img></a>
            <a href=""><img src={whatsapp} alt="WhatsAppLogo"></img></a>
            <p>Abner Landim™</p>
        </footer>
        </>
    );
}

export default Footer;