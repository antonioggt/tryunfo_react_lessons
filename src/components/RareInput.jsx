import React from 'react';

class RareInput extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <select name="">
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    );
  }
}

export default RareInput;
