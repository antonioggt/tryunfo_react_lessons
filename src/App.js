import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      onInputChange: this.onInputChange,
      onSaveButtonClick: this.onSaveButtonClick,
    };
  }

  onInputChange = (e) => {
    const { name, type, checked } = e.target;
    const value = type === 'checkbox' ? checked : e.target.value;
    this.setState({
      [name]: value });
  };

  onSaveButtonClick = () => {

  };

  render() {
    return (
      <>
        <Form { ...this.state } />
        <Card { ...this.state } />
      </>

    );
  }
}

export default App;
