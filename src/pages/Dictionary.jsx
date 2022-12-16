import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Dictionary() {
  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState([]);

  return (
    <>
      <div className="mx-auto w-full py-10 px-4 max-w-7xl grow overflow-y-hidden flex flex-col items-center">
        <h1 className="uppercase font-black text-3xl mb-4">Dictionary</h1>
        <div className="mx-auto flex max-w-md flex-col sm:flex-row">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 min-w-max flex items-center justify-center"
            htmlFor="word"
          >
            Enter Your Word:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="word"
            type="text"
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
            }}
            placeholder="Help"
          />
          <button
            className="bg-gray-500 inline-block hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2 sm:mt-0 sm:ml-4"
            onClick={(e) => {
              e.preventDefault();
              console.log(word);
              fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
                .then((response) => response.json())
                .then((data) => {
                  console.log(data[0].meanings);
                  setDefinitions(data[0].meanings);
                });
            }}
          >
            Search
          </button>
        </div>
        <div className="text-base max-w-xl mt-4">
          {word ? (
            <p className="">
              The definition for <span className="font-bold">{word}</span> is:{" "}
            </p>
          ) : (
            <p></p>
          )}
          <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="text-left">
            {definitions ? (
              definitions.map((definition) => {
                return (
                  <p key={uuidv4()}>
                    {definition.partOfSpeech +
                      ": " +
                      definition.definitions[0].definition}
                  </p>
                );
              })
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dictionary;
