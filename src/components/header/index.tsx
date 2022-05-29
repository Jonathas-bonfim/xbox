import './styles.scss';
import logoXboxIMG from  '../../assets/images/logo-xbox.svg';

export function Header(){
    return(
        
        <header>
            <img src={logoXboxIMG} alt="Logo xbox" />
            <nav>
                <a href="">VISÃO GERAL</a>
                <a href="">JOGOS</a>
                <a href="">GALERIA</a>
                <a href="">UNBOX</a>
            </nav>
            <button>VER DISPONIBILIDADE</button>
        </header>
    )
}