import React from 'react';

import ZipCodeEntry from './ZipCodeEntry';
import WeatherDisplay from './WeatherDisplay';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewZip = this.handleNewZip.bind(this);
    this.state = {
      zips: []
    };
  }

  render() {
    return (
      <div style={{ padding: '1em' }}>
        <ZipCodeEntry newZip={this.handleNewZip} />
        {this.state.zips.map((z, i) => <WeatherDisplay key={i} zip={z} />)}
      </div>
    );
  }

  handleNewZip(zip) {
    if (/\d{5}/.test(zip)) {
      this.setState({
        zips: this.state.zips.concat(zip)
      });
    } else {
      alert("That's not a valid zip code!");
    }
  }
}
