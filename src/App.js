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
  const [activeCharacter, setActiveCharacter]=useState("Luke Skywalker");

useEffect(function(){
  axios.get("https://swapi.dev/api/people")
  .then(function(res){
    const characters=res.data;
  })
  .catch(function(err){
    debugger
  })
},[])

  return (
    <div className="App">
      <h1 className="Header">{characters}</h1>
    </div>
  );
}

export default App;
