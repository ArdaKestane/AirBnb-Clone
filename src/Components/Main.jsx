import React from "react";
import Card from "./Card.jsx";
import data from "../data.js";

export default function Main() {
  const cards = data.map((item) => {
    console.log(item.openSpots);
    return <Card key={item.id} {...item} />;
  });

  return <div className="cards-list">{cards}</div>;
}
