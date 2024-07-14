import React from "react";
import harry from "./pages/harry.avif";
function Home() {
  return (
    <div className="home">
      <h1>Harry Potter</h1>
      <img src={harry} alt="Harry Potter" className="harryImg" />
    </div>
  );
}

export default Home;
