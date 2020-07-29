import React from "react";
import "./styles.css";

export default function Counter(props) {
  return (
    <div>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
      <span> Counter - {props.counterItem.id} - </span>
      <span> {props.counterItem.value} </span>
    </div>
  );
}
