import React, { useEffect, useState } from "react";
import Word from "../Word/Word";
import generateRandomWord from "../../words/generateWords";

function App() {
  const [wordData, setWordData] = useState(generateRandomWord());

  useEffect(() => {
    // fix for 100vh on mobile devices
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    console.log(vh);
  }, []);

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
