import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    value: 0,
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 6 },
      { id: 4, value: 1 }
    ]
  };

  constructor() {
    super();
    console.log("I am in constructor....");
  }

  componentDidMount() {
    console.log("I am in componentDidMount....");
  }
  componentDidUpdate() {
    console.log("I am in componentDidUpdate....");
  }
  componentWillUnmount() {
    console.log("I am in componentWillUnmount....");
  }

  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter);
    this.setState({ counters: counters });
    // console.log("handleDelete = " + counter);
  };
  handleReset = () => {
    const counters = [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ];
    this.setState({ counters: counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters: counters });
  };
  render() {
    console.log("I am in render....");
    return (
      <div>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
          counters={this.state.counters}
        />
      </div>
    );
  }
}

export default App;
