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
      <Header title="Pokemon game" descr="this is simple card game"/>
{/*       <PokemonCard>
        In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
        Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
        To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
      </PokemonCard> */}
      <Layout urlBg = {Picture} title="First Layout">
        Anim ea nulla laborum eu deserunt aliqua aliquip deserunt esse qui proident cillum. Qui officia sint est amet reprehenderit Lorem. Tempor tempor non enim qui ut sunt enim et ullamco sint officia aliquip in duis. Non occaecat irure laboris in magna fugiat laborum deserunt est non ullamco aliqua velit. Ipsum dolor anim mollit reprehenderit cillum aliquip voluptate irure tempor.    
      </Layout>
      <Layout  title="Layout two" colorBg="red">
        <div className="flex">
          { POKEMONS.map(item => <PokemonCard key={item.id} {...item} />) }
        </div>
      </Layout>
      <Layout urlBg = {Picture2} title="Picture two">
         Anim ea nulla laborum eu deserunt aliqua aliquip deserunt esse qui proident cillum. Qui officia sint est amet reprehenderit Lorem. Tempor tempor non enim qui ut sunt enim et ullamco sint officia aliquip in duis. Non occaecat irure laboris in magna fugiat laborum deserunt est non ullamco aliqua velit. Ipsum dolor anim mollit reprehenderit cillum aliquip voluptate irure tempor.   
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
