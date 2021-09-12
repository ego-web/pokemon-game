import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { Footer } from './components/Footer'
import Picture from './assets/bg3.jpg'
import Picture2 from './assets/bg2.jpg'

function App() {
  return (
    <div className="App">
      {/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lets begin pokemon-game
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header title="This is header" descr="this is header"/>
      <Layout urlBg = {Picture} title="Picture one" descr="Picture one" colorBg="green"/>
      <Layout  title="Layout two" descr="Layout two" colorBg="red" />
      <Layout urlBg = {Picture2} title="Picture two" descr="Picture two" colorBg="blue" />
      <Footer />
    </div>
  );
}

export default App;
