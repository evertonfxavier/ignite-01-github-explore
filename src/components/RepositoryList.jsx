import React, { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";

import "../styles/repositories.scss";

//https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: "unform",
  description: "Form in React",
  link: "https://github.com/evertonfxavier",
};

function RepositoryList() {
  //ele vai armazernar uma LISTAgem de rerpositórios > array
  const [repositories, setRepositories] = useState([]);

  //serve para eu disparar uma função quando algo acontecer na minha aplicação;
  //algo no caso, pode ser quando uma variável mudou;
  //se a var mudou, quero avisar a api que houve uma alteração nela, por exemplo;
  //ou quero disparar uma funçao dentro do meu sistema.

  //primeiro parametro >> () => {} >> qual função eu quero executar
  //segundo >> [] >> quando eu quero executar
  useEffect(() => {

  }, [repositories]);
  //esse array é chamando de dependencias
  // se o [] tiver vazio, esse função do useEffect vai executar uma única vez assim que o componente for exibido em tela;
  //OBS. se tiver apenas o primeiro parametro VAI ENTRAR EM LOOP
  //OBS. outro problema é quando a gente tenta atualizar uma variável (repositories), 
  //que a gente ta usando como dependencia


  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}

export default RepositoryList;
