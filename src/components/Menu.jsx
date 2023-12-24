import SobreMim from '../pages/SobreMim/SobreMim';
import Principal from '../pages/home/Principal';
import './Menu.css';


function Menu() {
    return(
        <>
            <header id="navbar">
                <a href='/'><img src="#"></img></a>
                <nav id="paginas">
                    <a href="/sobremim">SOBRE MIM</a>
                    <a href="/projetos">PROJETOS</a> 
                    <a href="/conexoes">CONEXÕES</a>
                    <a href="/creditos">CRÉDITOS</a>
                </nav>
            </header>

            
        </>
    );
}

export default Menu;
