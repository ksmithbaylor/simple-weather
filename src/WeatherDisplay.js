import React from 'react';
import request from 'superagent';
import Paper from 'material-ui/lib/paper';

const apiKey = 'f51233d6e43d44de92d140c73527c9bd';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
const baseParams = `units=imperial&APPID=${apiKey}`;

const columnStyle = {
  width: '33%',
  verticalAlign: 'middle',
  display: 'inline-block'
};

export default class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: null,
      error: false
    };
  }

  componentDidMount() {
    const requestUrl = `${baseUrl}?${baseParams}&zip=${this.props.zip}`;

    request.get(requestUrl).end((err, response) => {
      if (!err && response.body.cod === 200) {
        this.setState({ loaded: true, data: response.body });
      } else {
        this.setState({ error: true });
      }
    });
  }

  render() {
    const contents = this.state.loaded ? (
      <div style={{ verticalAlign: 'top' }}>
        <div style={columnStyle}>
          <h2>{this.state.data.name}</h2>
          <p>{this.props.zip}</p>
        </div>
        <div style={columnStyle}>
          <h1>{this.state.data.main.temp}&deg;</h1>
        </div>
        <div style={columnStyle}>
          <p>{this.state.data.weather[0].description}</p>
          <p>Humidity: {this.state.data.main.humidity}</p>
          <p>Wind Speed: {this.state.data.wind.speed}</p>
        </div>
      </div>
    ) : this.state.error ? (
      <p>An error occurred for zip code {this.props.zip}.</p>
    ) : (
      <p>Loading...</p>
    );

    console.log(this.state.data);

    return (
      <Paper style={{ padding: '1em', marginTop: '1em' }}>
        {contents}
      </Paper>
    );
  }
}
