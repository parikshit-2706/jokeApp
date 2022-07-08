import React, { useState } from "react";

export default function Joketype() {
  // https://v2.jokeapi.dev/joke/Dark?type=single
  const [type, setType] = useState("Any");

  const url = "https://v2.jokeapi.dev/joke/" + type + "?type=single";

  const [joke, setJoke] = useState("Joke will appear here ");

  const handlesubmit = () => {};

  const getJoke = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.joke);
    setJoke(data.joke);
  };

  const handleClick = (e) => {
    e.preventDefault();
    getJoke();
  };

  //   var select = document.getElementById('language');
  // var value = select.options[select.selectedIndex].value;
  // console.log(value); //

  return (
    <div>
      <form onSubmit={handlesubmit} className="joke--form">
        <div className="joke--inner">
          <label>Joke category: </label>
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="Any">Any</option>
            <option value="Programming"> Programming</option>
            <option value="Dark"> Dark</option>
            <option value="Pun"> Pun</option>
          </select>

          {/* <h3>Selected value : {type} </h3> */}
          {/* <p>{url}</p> */}
          <button onClick={handleClick}> Get Joke pls </button>
        </div>
        <h3>{joke}</h3>
      </form>
    </div>
  );
}
