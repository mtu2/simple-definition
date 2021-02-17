import React from "react";
import Definition from "./Definition/Definition";
import styles from "./Word.module.css";

function Word(props) {
  // Unpack pronunciation
  let pronunciation = props.wordObject.pronunciation;
  if (typeof pronunciation === "object") {
    pronunciation = pronunciation[Object.keys(pronunciation)[0]];
  }

  return (
    <div className={styles.word}>
      <div className={styles.title}>
        <h1>{props.word}</h1>
        <h2>
          <em>/{pronunciation}/</em>
        </h2>
      </div>

      {props.wordObject.definitions
        .filter((def) => def.hasOwnProperty("examples"))
        .slice(0, 5)
        .map((def, index) => (
          <Definition
            wordDef={def.definition}
            number={index + 1}
            partOfSpeech={def.partOfSpeech}
            example={def.examples[0]}
            key={index}
          />
        ))}

      <button onClick={props.clicked}>
        <em>generate</em>
      </button>
    </div>
  );
}

export default Word;
