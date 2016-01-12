import React from 'react';
import Paper from 'material-ui/lib/paper';

export default class App extends React.Component {
  render() {
    return (
      <div style={{ padding: '1em' }}>
        <Paper zDepth={2} style={{ padding: '1em' }}>
          <p>hello world</p>
        </Paper>
      </div>
    );
  }
}
