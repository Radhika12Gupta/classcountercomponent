import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        count:0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
     increment(){
        this.setState(previousValue => ({
            count: previousValue.count + 1,
          }));
}
  decrement(){
    this.setState(previousValue => ({
        count: previousValue.count - 1,
      }));
  }
  render() {
    return <div>
    <h2>Counter App</h2>
    Count: {this.state.count}
    <br/>
    <button onClick={this.increment}>Increment</button>
    <button onClick={this.decrement}>Decrement</button>

    </div>
  }
}