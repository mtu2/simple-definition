import React, { useState } from "react";
import Word from "../Word/Word";
import generateRandomWord from "../../words/generateWords";

function App() {
  const [wordData, setWordData] = useState(generateRandomWord());

  function newWordHandler() {
    const generated = generateRandomWord();
    setWordData(generated);
  }

  return (
    <Word
      word={wordData[0]}
      wordObject={wordData[1]}
      clicked={newWordHandler}
    />
  );
}

export default App;
