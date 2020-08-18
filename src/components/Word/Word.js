import React, { Component } from "react";

import Definition from "./Definition/Definition";
import styles from "./Word.module.css";

class Word extends Component {
  state = {
    word: "hello",
    definitions: [],
    phonetics: "həˈləʊ",
  };

  render() {
    return (
      <div className={styles.word}>
        <div className={styles.title}>
          <h1>{this.state.word}</h1>
          <h2>
            <em>{this.state.phonetics}</em>
          </h2>
        </div>

        <Definition />
        <Definition />
      </div>
    );
  }
}

export default Word;
