import { Section } from "./Component/Section/Index";

import narutoImg from './assets/naruto.jpg';
import jujutsuImg from './assets/jujutsu.jpg';
import moshukuImg from './assets/mushoku.jpg';

import './global.css';

function App() {
  return (
    <div className="wrapper">
      <Section 
        title="Jujutsu Kaisen"
        sinopse="Sinopse: Apesar do estudante colegial Yuuji Itadori ter grande força física,
         ele se inscreve no Clube de Ocultismo. Certo dia, eles encontram um “objeto amaldiçoado” e 
         retiram o selo, atraindo criaturas chamadas de “maldições”."
        img={jujutsuImg}
        color="#283350"
        />
      <Section 
        title="Mushoku Tensei"
        sinopse="
        Na história podemos acompanhar um otaku desempregado 
        com seus trinta e quatro anos que chega num ponto sem saída em sua vida e decide virar a folha, porém ele é 
        atropelado e morre. Ele acaba renascendo no corpo de uma criança num estranho mundo novo de espadas e magia."
        img={moshukuImg} 
        color="#f93800"
        />
      <Section 
        title="Naruto"
        sinopse="Naruto é um jovem órfão habitante da Vila da Folha que sonha se tornar o quinto Hokage, 
        o maior guerreiro e governante da vila. ... Agora Naruto vai contar com a ajuda dos colegas Sakura e 
        Sasuke e do professor dos três, Kakashi Hatake, 
        para perseguir seu sonho e deter os ninjas que planejam fazer mal á sua cidade"
        img={narutoImg} 
        color="#2a2b2b"
        />
    </div>
    );
}

export default App;
