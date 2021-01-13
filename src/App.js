import logo from './logo.svg';
import './App.css';
import React from 'react'
import Button from './components/Button';
import { db } from './services/firebase'
const ACTIONS = {
  TURN_LEFT: 1,
  TURN_RIGHT: 2,
  ACTION_3: 3,
  ACTION_4: 4
}

function App() {

  // const [loading, setLoading] = React.useState(false)
  const updateAction = (value) => {
    console.log(value)
    db.ref('action/')
      .set(value)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Monsterkyle Controller</h2>
        <div style={{ flexDirection: "row", justifyContent: "center" }}>
          <Button onClick={() => updateAction(1)}>Turn L - 1</Button>
          <Button onClick={() => updateAction(2)}>Turn R - 2</Button>
        </div>
        <Button onClick={() => updateAction(3)}>Action - 3</Button>
        <Button onClick={() => updateAction(4)}>Action - 4</Button>
      </header>

    </div>
  );
}

export default App;
