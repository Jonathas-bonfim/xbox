import logoImg from '../../assets/images/logo-xbox.svg';
import xboxImg from '../../assets/images/xbox.png';
import luzVerdeImg from '../../assets/images/luz-verde.svg';

import { Header } from '../../components/header';

export function Home(){
    return(
        <>
            <Header />

            <body>
                <section className='Container'>
                    <h1>Xbox Series X </h1>
                    <p>Pedido antecipado</p>
                    <img src={luzVerdeImg} alt="Luz verde" />
                    <img src={xboxImg} alt="Imagem Xbox" />
                </section>

            </body>
        </>
    );
}