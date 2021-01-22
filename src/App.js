import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import './App.css';
import Character from "./components/Character.js";
import axios from "axios";

const App = () => {

  const [characters, setCharacters]=useState([]);

  useEffect(function(){
    axios.get("https://swapi.dev/api/people/")
    .then(function(res){
      console.log("HELLO", res.data.results);
      setCharacters(res.data.results);
    })
    .catch(function(err){
      console.log(err);
    })
  },[])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters} setCharacters={setCharacters} />
    </div>
  );
}

export default App;
