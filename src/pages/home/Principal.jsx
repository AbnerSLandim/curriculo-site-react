import Menu from '../../components/Menu';
import Footer from '../../components/Footer'
import './Principal.css'

import Pfp from '../../images/placeholderpfp.jpg'
import VideoBackground from '../../images/Coding Programming Background Video FHD.mp4'

function Principal(){
    return(
        <>
        <main>
            
            <div id='pfp'>
                <img src={Pfp} alt='pfp'></img>
                <video id="videoBackground" autoPlay loop muted >
                    <source src={VideoBackground} type='video/mp4'></source>
                </video>
            </div>
            <article>
                <h1>Abner Landim</h1>
                <h4>Engenheiro de Software</h4>
                <p>Desenvolvedor Fullstack</p>
                    
            </article>
            <aside>sidebar</aside>

            <footer>
                <Footer/>
            </footer>
        </main>
        </>
    );
}

export default Principal;