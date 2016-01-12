import React from 'react';
import TextField from 'material-ui/lib/text-field';

export default class ZipCodeEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
  }

  render() {
    return (
      <TextField
        ref="textField"
        floatingLabelText="Enter a zip code"
        onEnterKeyDown={this.handleEnter}
      />
    );
  }

  handleEnter(event) {
    this.props.newZip(event.target.value);
    this.refs.textField.clearValue();
  }
}
