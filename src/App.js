import React, { useState } from "react";
import "./styles.css";
import { drama } from "./database";
var dramas = Object.keys(drama);

export default function App() {
  const [seldrama, setseldrama] = useState("Romantic");
  const [isActive, setActive] = useState({ active: "Romantic" });

  function ButtonClick(part) {
    setseldrama(part);
    console.log(seldrama);
    setActive({ active: seldrama });
  }
  return (
    <div className="App">
      <h1>KDrama Recommendation</h1>
      <hr />
      <h2>"Nothing Influences people more than Recommendation"</h2>
      <h2 style={{ color: "brown" }}>Genre:</h2>
      <section>
        {dramas.map(function (part, index) {
          return (
            <span
              key={part}
              onClick={() => ButtonClick(part)}
              className={isActive.active === part ? "active" : ""}
            >
              {part}
            </span>
          );
        })}
        <h3>Double Click to choose any Genre</h3>

        {drama[seldrama].map((part) => {
          return (
            <div className="card">
              <img src={part.image} alt="poster" width="250px" height="400px" />

              <div className="container">
                <div className="dname"> {part.dname}</div>
                <div>IMDb Rating : {part.IMDb}</div>
                <div>
                  Watch Drama:
                  <a href={part.link} target="_blank">
                    Watch Here
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
