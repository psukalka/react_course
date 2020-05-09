import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  //   constructor() {
  //     super();
  //     this.increment = this.increment.bind(this);
  //   }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.increment} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
