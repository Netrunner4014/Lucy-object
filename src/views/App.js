
import './App.scss';
import MyComponent from '../components/myComponent';
import {useState } from 'react';

const App = () => { 
  const [limit, setLimit] = useState('10');
  const [length, setLength] = useState('10');
  
  
  const handleEventClick = (event) => {
    console.log(limit)
    setLimit(length);
  }

  const handleOnchangeInput = (event) => {
    setLength(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>related_search_query</h1>
      <div className='limit'>
        <input type='number' value= {length} min="1" max="2" onChange={(event) => handleOnchangeInput(event)}>
        </input>
        <button type='button' onClick={(event) => handleEventClick(event)}>limit</button>
      </div>
      <MyComponent limit={limit}></MyComponent>
      </header>
    </div>
  );
}
export default App;