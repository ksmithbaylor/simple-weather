import React from 'react';
import Paper from 'material-ui/lib/paper';

export default class WeatherDisplay extends React.Component {
  componentDidMount() {
    console.log('new zip:', this.props.zip)
  }

  render() {
    return (
      <Paper style={{ padding: '1em', marginTop: '1em' }}>
        <p>{this.props.zip}</p>
      </Paper>
    );
  }
}
