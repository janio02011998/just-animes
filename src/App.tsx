import { Section } from "./Component/Section/Index";

import animes from './animes.json';

import narutoImg from './assets/naruto.jpg';
import jujutsuImg from './assets/jujutsu.jpg';
import moshukuImg from './assets/mushoku.jpg';

import './global.css';

interface AnimesProps {
  name: string;
  sinopse: string;
  genero: string;
  url: string;
  color: string;
}

function App() {

  const arrayAnimes = animes;

  return (
    <div className="wrapper">
      {arrayAnimes.map((animes: AnimesProps) => {
        return <Section
          title={animes.name}
          sinopse={animes.sinopse}
          url={animes.url}
          genero={animes.genero}
          color={animes.color}
        ></Section>
      })}
    </div>
  );
}

export default App;
