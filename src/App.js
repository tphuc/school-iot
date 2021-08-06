import './App.css';
import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SocketLoading from './components/SocketLogin';
import SocketController from './components/SocketController';



function App() {


  return (
    <Router>

          <Route exact path="/">
            <SocketLoading />
          </Route>
          <Route path="/:id" >
            <SocketController/>
          </Route>

    </Router>
  );
}

export default App;
