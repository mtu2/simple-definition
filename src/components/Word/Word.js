import React, { useRef, useEffect, useState } from "react";
import Definition from "./Definition/Definition";
import styles from "./Word.module.css";

const MIN_WIDTH_DEFAULT_FONT_SIZE = {
  600: { word: 72, pro: 24 },
  440: { word: 58, pro: 16 },
  0: { word: 40, pro: 16 },
};

const getDefaultFontSize = () => {
  const width = window.innerWidth;
  const reverseMinWidths = Object.keys(MIN_WIDTH_DEFAULT_FONT_SIZE)
    .sort()
    .map((str) => +str)
    .reverse();

  for (let minWidth of reverseMinWidths) {
    if (width > minWidth) {
      return MIN_WIDTH_DEFAULT_FONT_SIZE[minWidth];
    }
  }
};

const unpackPro = (pro) => {
  // Unpack pronunciation
  if (typeof pro === "object") {
    pro = pro[Object.keys(pro)[0]];
  }
  return pro;
};

function Word(props) {
  const titleRef = useRef(null);
  const wordRef = useRef(null);
  const proRef = useRef(null);
  const [fontSize, setFontSize] = useState(getDefaultFontSize());

  useEffect(() => {
    // set to default when new word is generated
    setFontSize(getDefaultFontSize());
  }, [props]);

  useEffect(() => {
    // adjust font size when new word is generated
    const titleWidth = titleRef.current.offsetWidth;
    const wordWidth = wordRef.current.offsetWidth;
    const proWidth = proRef.current.offsetWidth;

    if (titleWidth < wordWidth + proWidth + 24) {
      setFontSize((obj) => ({
        word: obj.word - 1,
        pro: Math.max(obj.pro - 1, 14),
      }));
    }
  }, [props, fontSize]);

  return (
    <div className={styles.word}>
      <div className={styles.title} ref={titleRef}>
        <h1 ref={wordRef} style={{ fontSize: `${fontSize.word}px` }}>
          {props.word}
        </h1>
        <h2 ref={proRef} style={{ fontSize: `${fontSize.pro}px` }}>
          <em>/{unpackPro(props.wordObject.pronunciation)}/</em>
        </h2>
      </div>

      {props.wordObject.definitions
        .filter((def) => def.hasOwnProperty("examples"))
        .slice(0, 3)
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
