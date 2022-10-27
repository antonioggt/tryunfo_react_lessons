import React from 'react';

class Attr1Input extends React.Component {
  render() {
    const { value } = this.props

    return (
      <input type="number" value={ value } onChange={} />
    );
  }
}

export default Attr1Input;
