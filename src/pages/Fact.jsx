import React from "react";
import { useParams } from "react-router-dom";

const facts = {
  1: "Harry's middle name is James.",
  2: "He is a Parselmouth, meaning he can talk to snakes.",
  3: "His patronus is a stag.",
  4: "Harry's birthday is July 31, 1980.",
};

function Fact() {
  const { factId } = useParams();
  const fact = facts[factId];

  return (
    <div>
      <h1>Harry Potter Fact</h1>
      {fact ? <p>{fact}</p> : <p>Fact not found</p>}
    </div>
  );
}

export default Fact;
