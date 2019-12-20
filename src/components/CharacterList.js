import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   axios.get()
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);
  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/`,
      )
      .then(response => {
        const characters = response.data.results.filter(
          character =>
            character.name
              .toLowerCase()
              .includes(query.toLowerCase())
        );
        setCharacterData(characters);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
 
  return (
    <section className="search-form">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div>
      {characterData.map(attribute => {
      return (
        <CharacterCard
        key = {attribute.url}
        name = {attribute.name}
        status = {attribute.status}
        species = {attribute.species}
        gender = {attribute.gender}/>
        )
        })}
    </div>
    </section>
  
    
  
  )}