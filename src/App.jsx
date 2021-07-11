import React from "react";
import "../src/styles/global.scss";
import Counter from "./components/Counter";
import RepositoryList from "./components/RepositoryList";

export function App() {
  // throw new Error('Corre bergue!!!')
  // isso vai me mostrar um erro no console

  return (
    <>
      {/* <RepositoryList /> */}
      <Counter />
    </>
  );
}
