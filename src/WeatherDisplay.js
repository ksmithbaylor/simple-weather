import React from 'react';
import request from 'superagent';
import Paper from 'material-ui/lib/paper';

const baseUrl = 'http://api.openweathermap.org';
const path = 'data/2.5/weather';
const apiKey = 'f51233d6e43d44de92d140c73527c9bd';

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
      data: null
    };
  }

  componentDidMount() {
    const url = `${baseUrl}/${path}?zip=${this.props.zip}&units=imperial&APPID=${apiKey}`;

    request.get(url).end((err, response) => {
      this.setState({
        loaded: true,
        data: response.body
      });
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
    ) : <p>Loading...</p>;

    console.log(this.state.data);

    return (
      <Paper style={{ padding: '1em', marginTop: '1em' }}>
        {contents}
      </Paper>
    );
  }
}
