import React from 'react';
import Paper from 'material-ui/lib/paper';

export default class App extends React.Component {
  render() {
    return (
      <Paper style={{ padding: '1em', marginTop: '1em' }}>
        <p>{this.props.zip}</p>
      </Paper>
    );
  }
}
