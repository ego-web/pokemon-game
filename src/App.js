import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { Footer } from './components/Footer'
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
      <Header />
      <Layout />
      <Layout />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
