import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.PureComponent {
  state = {
    message: 'Loading...'
  }

  componentDidMount() {
    window.fetch('/test.json').then(x => x.json()).then(result => {
      this.setState({
        message: result.message
      })
    })
  }

  render() {
    return (
      <div style={styles}>
        <Hello name={this.state.message} />
        <h2>Start editing to see some magic happen {'\u2728'}</h2>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
