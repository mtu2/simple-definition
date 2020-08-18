import React, { Component } from "react";

import Word from "../Word/Word";
import Data from "../../data/wordsapi_sample.json";

const generateRandomWord = () => {
  let newWord, newWordObject;
  do {
    let randomKey = Math.floor(Math.random() * Object.keys(Data).length);
    newWord = Object.keys(Data)[randomKey];
    newWordObject = Data[newWord];
  } while (
    !newWordObject.hasOwnProperty("definitions") ||
    newWordObject.definitions.length < 2 ||
    !newWordObject.hasOwnProperty("pronunciation")
  );
  return {
    currentWord: newWord,
    currentWordObject: newWordObject,
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...generateRandomWord(),
    };
  }

  render() {
    return (
      <>
        <Word
          word={this.state.currentWord}
          wordObject={this.state.currentWordObject}
        />
      </>
    );
  }
}

export default App;
