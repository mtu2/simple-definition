import React, { Component } from "react";

import Word from "../Word/Word";
import Data from "../../data/wordsapi_sample.json";

const arrayData = Object.entries(Data);
const filteredData = arrayData
  .filter((el) => {
    return (
      el[1].hasOwnProperty("definitions") &&
      el[1].definitions.length > 2 &&
      el[1].hasOwnProperty("pronunciation")
    );
  })
  .filter((el) => {
    let exampleNum = 0;
    for (let def of el[1].definitions) {
      if (def.hasOwnProperty("examples")) exampleNum++;
    }
    return exampleNum >= 2;
  });

const generateRandomWord = () => {
  const randomKey = Math.floor(Math.random() * filteredData.length);
  return {
    currentWord: filteredData[randomKey][0],
    currentWordObject: filteredData[randomKey][1],
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...generateRandomWord(),
    };
  }

  newWordHandler = () => {
    this.setState({
      ...generateRandomWord(),
    });
  };

  render() {
    return (
      <>
        <Word
          word={this.state.currentWord}
          wordObject={this.state.currentWordObject}
          clicked={this.newWordHandler}
        />
      </>
    );
  }
}

export default App;
