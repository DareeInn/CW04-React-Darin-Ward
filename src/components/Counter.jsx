import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <section className="card">
        <h2>Interactive Counter</h2>
        <p className="section-description">
          The counter uses component state and setState().
        </p>

        <div className="counter">
          <p className="count-number">{this.state.count}</p>

          <button
            type="button"
            className="primary-button"
            onClick={this.incrementCount}
          >
            Increment
          </button>
        </div>
      </section>
    );
  }
}

export default Counter;
