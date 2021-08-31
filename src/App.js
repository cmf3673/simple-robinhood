import logo from './logo.svg';
import './App.css';
import TickerSelect from './TickerSelect';
import PriceDisplay from './PriceDisplay';

function App() {
  return (
    <div className="App">
      <header className="ticker-select">
        <TickerSelect />
      </header>
        <PriceDisplay />
      
    </div>
  );
}

export default App;


{/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}