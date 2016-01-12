import React from 'react';
import request from 'superagent';
import Paper from 'material-ui/lib/paper';

const baseUrl = 'http://api.openweathermap.org';
const path = 'data/2.5/weather';
const apiKey = 'f51233d6e43d44de92d140c73527c9bd';

export default class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: null
    };
  }

  componentDidMount() {
    const url = `${baseUrl}/${path}?zip=${this.props.zip}&APPID=${apiKey}`;

    request.get(url).end((err, response) => {
      this.setState({
        loaded: true,
        data: response
      });
    });
  }

  render() {
    if (!this.state.loaded) {
      return <p>Loading...</p>;
    }

    console.log(this.state.data);

    return (
      <Paper style={{ padding: '1em', marginTop: '1em' }}>
        <p>{this.props.zip}</p>
      </Paper>
    );
  }
}
