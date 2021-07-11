import React, { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";

import "../styles/repositories.scss";

function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    //vou fazer um fetch > quando esse fetch me devolver uma resposta (then) >
    //vou converter essa resposta pra json
    //quando a resposta pra json termar de ser convertar, vou ter os dados do meu repositório
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.id} repository={repository} />;
        })}
      </ul>
    </section>
  );
}

export default RepositoryList;
