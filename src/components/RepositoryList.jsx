import React from "react";
import RepositoryItem from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "Form in React",
  link: "https://github.com/evertonfxavier",
};

function RepositoryList() {
  return (
    <div>
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </div>
  );
}

export default RepositoryList;
