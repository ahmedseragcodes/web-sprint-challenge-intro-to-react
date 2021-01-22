import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from "axios";

// Write your Character component here

export default function Character(props){

const {characters, setCharacters}=props;

    return (
        <div>
        <ul>
        {characters.map(function(character){
            return <li key={character.name}>{character.name}</li>
        })}
        </ul>
        </div>
    )
}