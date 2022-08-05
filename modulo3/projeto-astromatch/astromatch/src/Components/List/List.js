import React from "react";
import { Lista } from "./style";

export function List(props) {
  const { arrayMatches } = props;
  console.log(arrayMatches);

  const listMatches = arrayMatches.map((element) => {
    return (
      <li key={element.id}> 
        <img src={element.photo} alt="" />
        <p>{element.name}</p>
      </li>
    );
  });

  return (
    <Lista>
      <main>
        <ul>{listMatches}</ul>
      </main>
    </Lista>

  );
}
