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
    const displays = this.state.zips.map((zip, i) => (
      <WeatherDisplay key={i} zip={zip} />
    ));

    return (
      <div style={{ padding: '1em' }}>
        <ZipCodeEntry newZip={this.handleNewZip} />
        {displays}
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
