import logo from './logo.svg';
import './App.css';
import { getUserNameList } from './samples/sample1';

function App() {
  return (
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
        <ul>
          {getUserNameList().map((userName, index) => (
            <li key={index}>{userName}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
