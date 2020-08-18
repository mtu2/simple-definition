import React from "react";

import styles from "./Definition.module.css";

const Definition = (props) => (
  <div className={styles.definition}>
    <p className={styles.number}>1.</p>
    <p className={styles.wordDefinition}>serve as the inciting cause of.</p>
    <p className={styles.partOfSpeech}>
      <em>verb</em>
    </p>
    <p className={styles.example}>
      <em>
        "his philosophy <strong>inspired</strong> a later generation of
        environmentalists"
      </em>
    </p>
  </div>
);

export default Definition;
