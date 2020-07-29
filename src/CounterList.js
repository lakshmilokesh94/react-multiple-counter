import React from "react";
import "./styles.css";
import Counter from "./Counter";

export default class CounterList extends React.Component {
  onIncrement = index => {
    this.props.onIncrement(index);
  };

  onDecrement = index => {
    this.props.onDecrement(index);
  };

  render() {
    let counters = this.props.counters;
    return (
      <div>
        <ul>
          {counters.map((counter, index) => (
            <Counter
              key={counter.id}
              counterItem={counter}
              onIncrement={() => {
                this.onIncrement(index);
              }}
              onDecrement={() => {
                this.onDecrement(index);
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
}
