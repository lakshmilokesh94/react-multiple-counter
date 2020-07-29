import React from "react";
import "./styles.css";
import CounterList from "./CounterList";
import Statistics from "./Statistics";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
      counters: this.getInitialCountersList(props.number)
    };
  }

  getInitialCountersList(count) {
    let counters = [];
    for (let i = 1; i <= count; i++) {
      counters.push({ id: i, value: 0 });
    }
    console.log(counters);
    return counters;
  }

  getUpdatedCounterList(counters, index, isIncrement) {
    let newCount = counters[index];
    newCount.value = isIncrement ? newCount.value + 1 : newCount.value - 1;
    return [
      ...counters.slice(0, index),
      newCount,
      ...counters.slice(index + 1)
    ];
  }

  onIncrement = index => {
    this.setState({
      counters: this.getUpdatedCounterList(this.state.counters, index, true)
    });
  };

  onDecrement = index => {
    this.setState({
      counters: this.getUpdatedCounterList(this.state.counters, index, false)
    });
  };

  render() {
    return (
      <div className="container">
        <CounterList
          counters={this.state.counters}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
        <Statistics data={this.state} />
      </div>
    );
  }
}
