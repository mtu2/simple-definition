import React from "react";

import styles from "./Definition.module.css";

const Definition = (props) => (
  <div className={styles.definition}>
    <p className={styles.number}>{props.number}.</p>
    <p className={styles.wordDefinition}>{props.wordDef}</p>
    <p className={styles.partOfSpeech}>
      <em>{props.partOfSpeech}</em>
    </p>
    <p className={styles.example}>
      <em>{props.example[0].toLowerCase() + props.example.substring(1)}</em>
    </p>
  </div>
);

export default Definition;
