import React from 'react';

class NameInput extends React.Component {
  render() {
    return (
      <label htmlFor="teste">
        name-input
        <input
          id="teste"
          type="text"
          data-testid="name-input"
        />
      </label>
    );
  }
}

export default NameInput;
