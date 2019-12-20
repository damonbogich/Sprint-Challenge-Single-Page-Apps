import React from "react";
import styled from "styled-components";

const StyledOutterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;`

const StyledContainer = styled.div`
border: 2px dashed black;
width: 33%;
margin: 5%;`;

const NameStyle = styled.h1`
font-size: 4rem;
color: red;`;

const StatusStyle = styled.p`
font-size: 2rem;
color: blue;`;

const SpeciesStyle = styled.p`
font-size: 2rem;
color: green`;

const GenderStyle = styled.p`
font-size: 2rem;
color: purple;`;

const CharacterCard = props => {
    return ( 
    <StyledOutterContainer>   
        <StyledContainer>
            <NameStyle>Name: {props.name}</NameStyle>
            <StatusStyle>Status: {props.status}</StatusStyle>
            <SpeciesStyle>Species: {props.species}</SpeciesStyle>
            <GenderStyle>Gender: {props.gender}</GenderStyle>
        </StyledContainer>
    </StyledOutterContainer> 
    )
  };
  
  export default CharacterCard;