import React, { Component } from "react";
class Counter extends Component {
  state = {
    // count: this.props.value,
    tags: []
  };

  formatCount = () => {
    const { value } = this.props;
    const x = <b>Zero</b>;

    return value === 0 ? x : value;
  };

  style = {
    fontSize: 15,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount call");
  }

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  // handleDecrement = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };

  render() {
    // console.log(this.props.value);
    // this.setState({ count: this.props.value });
    return (
      <div>
        {this.props.children}
        <button
          onClick={this.props.onDecrement}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.props.onIncrement}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm">
          Delete
        </button>
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let cls = "badge m-2 badge-";
    return (cls += this.props.value === 0 ? "warning" : "primary");
  }
}

export default Counter;
