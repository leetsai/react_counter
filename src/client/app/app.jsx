import React from 'react';
import {render} from 'react-dom';

class CountComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  addOne() {
    this.setState({
      count: this.state.count + 1
    })
  }

  removeOne() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <h1> { this.state.count } </h1>
        <button onClick={ this.addOne.bind(this) }>+ 1</button>
        <button onClick={ this.removeOne.bind(this) }>- 1</button>
      </div>
    );
  }
}

render(<CountComponent />, document.getElementById("app"));
