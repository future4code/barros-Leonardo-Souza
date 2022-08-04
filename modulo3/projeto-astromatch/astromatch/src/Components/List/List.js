import React from "react";
import { Lista } from "./style";

export function List(props) {
  const { arrayMatches } = props;
  console.log(arrayMatches);

  // const listMatches = arrayMatches.map((element) => {
  //   return (
  //     <li>
  //       <img src={element.image} alt="" />
  //       <p>{element.name}</p>
  //     </li>
  //   );
  // });

  return (
    <Lista>
      <p>Teste</p>
      <main>
        <ul></ul>
      </main>
    </Lista>
  );
}
