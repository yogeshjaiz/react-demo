import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            onDelete={() => onDelete(counter.id)}
            key={counter.id}
            value={counter.value}
            onIncrement={() => onIncrement(counter)}
            onDecrement={() => onDecrement(counter)}
          >
            <h4>Title</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
