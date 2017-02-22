import React from 'react';
import {render} from 'react-dom';
import ChildComponent from './ChildComponent.jsx';

class CountComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
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
        <ChildComponent count={ this.state.count } addOne={ this.addOne } removeOne={ this.removeOne } />
      </div>
    );
  }
}

render(<CountComponent />, document.getElementById("app"));
