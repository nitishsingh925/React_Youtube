import React from "react";
import Button from "./Button";

function ButtonList() {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Music" />
      <Button name="Live" />
      <Button name="Movies" />
      <Button name="Game" />
      <Button name="News" />
      <Button name="Bollywood" />
    </div>
  );
}

export default ButtonList;
