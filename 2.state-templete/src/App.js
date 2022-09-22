import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import { Container } from "@material-ui/core";
class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
      </Container>
    );
  }
}

export default App;
