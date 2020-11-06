import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters]=useState([]);

useEffect(function(){
  axios.get("https://swapi.dev/api/people")
  .then(function(res){
    let characters=res.results;
    setCharacters(characters);
  })
  .catch(function(err){
    debugger
  })
},[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <ul>
        <li>characters.name</li>
      </ul>
    </div>
  );
}

export default App;
