import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from "axios";

// Write your Character component here

export default function Character(props){

const {characters, setCharacters}=props;

    return (
        <div>
        <StyledUL>
        {characters.map(function(character){
            return <StyledLI key={character.name}>{character.name}, Born In The Year {character.birth_year}</StyledLI>
        })}
        </StyledUL>
        </div>
    )
}

//Styled Components 

const StyledUL=styled.ul`
list-style-type: none;
font-size: 1.4rem;
color: aqua;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`

const StyledLI=styled.li`
padding: 1rem;
border: 1rem ridge black;
border-radius: 2rem;
background-color: #FFE81F;
color: black;
margin: 1rem;
width: 50%;
`