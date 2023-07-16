import logo from './logo.svg';
import './App.scss';
import MyComponent from '../components/myComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;
