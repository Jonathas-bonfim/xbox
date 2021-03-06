import './styles.scss';
import xboxImg from '../../assets/images/xbox.png';
import luzVerdeImg from '../../assets/images/luz-verde.svg';
import controleImg from '../../assets/images/controle-xbox.png';
import farcryImg from '../../assets/images/farcry.png';
import forzaImg from '../../assets/images/forza.png';
import fifaImg from '../../assets/images/fifa.png';
import minecraftImg from '../../assets/images/minecraft.png';

import { Header } from '../../components/header';
import { QuestionProps, Questions } from '../../components/Questions';


export function Home() {
    const data: QuestionProps[] = [
        {
            question: 'Meus jogos anteriores do Xbox vão funcionar no Xbox séries X?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit1.'
        },
        {
            question: 'O que está incluído no Xbox series x?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit2.'
        }, {
            question: 'Como sei se minha Tv é compatível com 4k?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit3.'
        }, {
            question: 'Como sei se minha Tv é compatível com 8k?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit3.'
        },  {
            question: 'Como sei se minha Tv é compatível com 8k?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit3.'
        },
    ];
    return (
        <>
            <Header />

            <body>

                <section className='content'>
                    <h1>Xbox series X</h1>
                    <p>Pedido antecipado</p>
                    <img src={luzVerdeImg} className='background-green' alt="Luz verde" />
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
                    <img src={controleImg} alt="Controle Xbox" />
                </section>

                <section className="sectionImages">
                    <img src={farcryImg} alt="Imagem Farcry" />
                    <img src={forzaImg} alt="Forza" />
                    <img src={fifaImg} alt="Fifa" />
                    <img src={minecraftImg} alt="Minecraft" />
                </section>

                <section className="questions">

                    <h1>Perguntas <span>frequentes</span></h1>
                    {
                        data.map((item) => {
                            return (
                                <Questions question={item.question} answer={item.answer} key={item.question} />
                            )
                        })
                    }
                </section>
            </body>
        </>
    );
}