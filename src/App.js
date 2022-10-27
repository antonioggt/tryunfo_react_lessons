import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  onInputChange = () => {

  };

  onSaveButtonClick = () => {

  };

  render() {
    return (
      <>
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
        <Card
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
        />
      </>

    );
  }
}

export default App;
