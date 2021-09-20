import React from "react";

import { Card } from "../card/card-component";

import "./card-list.component.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((data) => (
      <Card key={data.id} data={data} />
    ))}
  </div>
);
