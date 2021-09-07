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
    </div>
  );
}

export default App;