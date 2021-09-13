import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Footer } from './components/Footer';
import { PokemonCard } from './components/PokemonCard';
import Picture from './assets/bg3.jpg';
import Picture2 from './assets/bg2.jpg';
import POKEMONS from './assets/cards.json';

const App = () => {
  return (
    <div className="App">
      <Header title="Pokemon game" descr="this is simple card game" />
      <Layout urlBg={Picture} title="First Layout">
        Anim ea nulla laborum eu deserunt aliqua aliquip deserunt esse qui proident cillum. Qui officia sint est amet reprehenderit Lorem. Tempor tempor non enim qui ut sunt enim et ullamco sint officia aliquip in duis. Non occaecat irure laboris in magna fugiat laborum deserunt est non ullamco aliqua velit. Ipsum dolor anim mollit reprehenderit cillum aliquip voluptate irure tempor.
      </Layout>
      <Layout title="Layout two" colorBg="red">
        <div className="flex">
          {POKEMONS.map(item => <PokemonCard key={item.id} type={item.type} img={item.img} name={item.name} id={item.id} values={item.values} />)}
        </div>
      </Layout>
      <Layout urlBg={Picture2} title="Picture two">
        Anim ea nulla laborum eu deserunt aliqua aliquip deserunt esse qui proident cillum. Qui officia sint est amet reprehenderit Lorem. Tempor tempor non enim qui ut sunt enim et ullamco sint officia aliquip in duis. Non occaecat irure laboris in magna fugiat laborum deserunt est non ullamco aliqua velit. Ipsum dolor anim mollit reprehenderit cillum aliquip voluptate irure tempor.
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
