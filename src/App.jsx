import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [characters, setCharacters] = useState(0);
  const [words, setWords] = useState(0);
  const [theme, setTheme] = useState("Light");
  let wordCount = 0;

  function handleChange(e) {
    setText(e.target.value);
  }

  function themeClicked() {
    if (theme === "Light") {
      setTheme("Dark");
      return;
    }
    setTheme("Light");
  }

  useEffect(() => {
    for (i = 0; i < text.length; i++) {
      if (
        text[i] != " " &&
        text[i] != "\n" &&
        (text[i - 1] === " " || text[i - 1] === "\n" || wordCount === 0)
      ) {
        wordCount++;
      }
    }
    setCharacters(text.length);
    setWords(wordCount);
  }, [text]);

  return (
    <div className={"App" + theme}>
      <h2>Word Counter</h2>
      <textarea
        className={"textarea" + theme}
        value={text}
        onChange={handleChange}
      />
      <div className={"footer" + theme}>
        <h4>{characters} characters</h4>
        <h4>{words} words</h4>
      </div>
      <button onClick={themeClicked}> Change Theme </button>
    </div>
  );
}
