import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import {Route} from 'react-router-dom';
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path = "/">
        <WelcomePage />
      </Route>
      <Route exact path = "/characterlist">
        <CharacterList />
      </Route>
    </main>
  );
}
