import './styles.scss';
import xboxImg from '../../assets/images/xbox.png';
import luzVerdeImg from '../../assets/images/luz-verde.svg';

import { Header } from '../../components/header';

export function Home(){
    return(
        <>
            <Header />

            <body>

                <section className='content'>
                    <h1>Xbox series X</h1>
                    <p>Pedido antecipado</p>
                    <img src={luzVerdeImg} alt="Luz verde" />
                    <img src={xboxImg} alt="Imagem Xbox" />
                </section>

                <section className="container">
                    <div>
                        <h1>
                            <span>Desempenho</span> aperfeiçoado
                        </h1>
                        <p>
                        O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.
                        </p>
                    </div>
                </section>


            </body>
        </>
    );
}