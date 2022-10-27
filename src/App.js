import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  onInputChange = () => {

  };

  onSaveButtonClick = () => {

  };

  render() {
    return (
      <Form
        cardName=""
        cardDescription=""
        cardAttr1=""
        cardAttr2=""
        cardAttr3=""
        cardImage=""
        cardRare=""
        cardTrunfo={ false }
        hasTrunfo={ false }
        isSaveButtonDisabled={ false }
        onInputChange={ this.onInputChange }
        onSaveButtonClick={ this.onSaveButtonClick }
      />
    );
  }
}

export default App;
