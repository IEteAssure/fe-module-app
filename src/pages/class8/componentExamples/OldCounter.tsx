import React, { Component } from "react";
import { Button } from "../../../components/button/Button";

type CounterState = {
  count: number;
};

export class OldCounter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>{this.state.count}</p>
        <Button onClick={this.increment}>Increment</Button>
      </div>
    );
  }
}
