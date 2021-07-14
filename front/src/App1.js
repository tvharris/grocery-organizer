import {BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <Route path='/' exact render={(props) => (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
    )} />
    <Route path='/test' render={(props) => (
      <p>
        test
      </p> 
    )} />
    </Router>
  );
}

export default App;
