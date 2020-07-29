import React from "react";
import "./styles.css";

function TotalSum(props) {
  let totalSum = props.counters.reduce((acc, next) => {
    return { value: acc.value + next.value };
  });
  return <h3> Total Sum - {totalSum.value} </h3>;
}

function Average(props) {
  let totalSum = props.counters.reduce((acc, next) => {
    return { value: acc.value + next.value };
  });
  let average = Math.floor(totalSum.value / props.count);
  return <h3> Average - {average} </h3>;
}

function Max(props) {
  let counters = props.counters;
  let min = counters.reduce(
    (min, p) => (p.value > min ? p.value : min),
    counters[0].value
  );
  return <h3> Max - {min} </h3>;
}

function Min(props) {
  let counters = props.counters;
  let min = counters.reduce(
    (min, p) => (p.value < min ? p.value : min),
    counters[0].value
  );
  return <h3> Min - {min} </h3>;
}
export default function Statistics(props) {
  return (
    <div>
      <TotalSum counters={props.data.counters} />
      <Average count={props.data.number} counters={props.data.counters} />
      <Min counters={props.data.counters} />
      <Max counters={props.data.counters} />
    </div>
  );
}
