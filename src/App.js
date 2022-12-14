import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "๐": "attract intention towards left",
  "๐": "attract intention towards right",
  "โ": "pointing upwards",
  "๐": "I m available",
  "๐": "pointing downwards",
  "โ": "Victory",
  "๐ค": "wishing good luck",
  "๐": "live long",
  "๐ค": "call me",
  "๐": "stop",
  "๐": "looking good",
  "๐": "thumbs up",
  "๐": "thumbs down",
  "๐": "Laughing",
  "๐ณ": "Disbelief",
  "๐ค": "Angry",
  "๐ญ": "Crying",
  "โค๏ธ": "Heart",
  "๐": "Broken-Heart",
  "๐คจ": "Quetioning",
  "๐ด": "Sleeping"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("Emoji meaning are shown here!");
  var [emoji, setEmoji] = useState("");

  function inputChangeHandler(event) {
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("this emoji is not available in our database");
    }
  }
  function clickEmojiHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input
        onChange={inputChangeHandler}
        placeholder="Enter your emojis here"
      ></input>
      <div className="emoji-output">{emoji}</div>
      <div className="meaning">{meaning}</div>
      <h2>Emogis we know</h2>
      <div>
        {emojiList.map((emoji) => {
          return (
            <span onClick={() => clickEmojiHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
