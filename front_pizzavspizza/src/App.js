import './App.css';
import PizzaList from './components/pizzeriaslist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg" className="App-logo" alt="logo" />
        <p>
          Web App for Pizza Lovers
        </p>
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaList />
      </header>
    </div>
  );
}

export default App;
