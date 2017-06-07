import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";

import './App.css';
import SignIn from './SignIn'
import CharacterCreation from './CharacterCreation'


const App = () => {
  return(
    <BrowserRouter>
      <div>
      <h1> its alive </h1>
      <Route exact path="/" render ={() =>(
        <div>
          <SignIn/>
        <br/>
          <CharacterCreation/>

        </div>
      )}/>
      </div>
    </BrowserRouter>
  )
}

export default App
