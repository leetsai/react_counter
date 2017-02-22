import React from 'react';

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <h1> { this.props.count } </h1>
        <button onClick={ this.props.addOne }>+ 1</button>
        <button onClick={ this.props.removeOne }>- 1</button>
      </div>
    );
  }
}

export default ChildComponent;
