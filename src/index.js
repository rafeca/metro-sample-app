'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numLikes: 0,
    };
  }

  render() {
    return (
      <div><button onClick={() => this._onClick()}>Like</button>
        <p>
          This is a blog post
          {Array.from({length: this.state.numLikes}, () => '👍')}
        </p>
      </div>
    );
  }

  _onClick() {
    this.setState({numLikes: this.state.numLikes + 1})
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));

if (__DEV__) {
  require('./hmr');
}
