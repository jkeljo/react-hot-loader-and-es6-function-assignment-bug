import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numClicks: 0,
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({numClicks: this.state.numClicks + 1});
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Clicked {this.state.numClicks} times!</button>
      </div>
    );
  }
}
