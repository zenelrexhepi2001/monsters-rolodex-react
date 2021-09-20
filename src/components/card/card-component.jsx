import React from "react";

import "./card-component.css";

export const Card = (props) => (
  <article className="card">
    <img
      alt="robo-hash-img"
      src={`https://robohash.org/${props.data.id}developer
`}
    />
    <h1>{props.data.name}</h1>
    <p>{props.data.email}</p>
  </article>
);
