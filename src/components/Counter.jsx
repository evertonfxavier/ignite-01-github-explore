import React, { useState } from "react";

function Counter() {
  // let counter = 0;
  const [counter, setCounter] = useState(0);
  //estou desestruturando um array em 2 variáveis
  //nao precisa ser let, pois nao vai mudar
  //OBS. let vem de 'let it change'

  function increment() {
    // console.log("foi");
    // counter = counter + 1;
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Add
      </button>
    </div>
  );
}

export default Counter;
