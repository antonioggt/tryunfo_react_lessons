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
      isSaveButtonDisabled: this.isSaveButtonDisabled,
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

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const validateName = cardName.length > 0;
    const validateDescription = cardDescription.length > 0;
    const validateImage = cardImage.length > 0;
    const validadeRare = cardRare.length > 0;
    const magicNum = 90;
    const maxAttr = (
      cardAttr1 <= magicNum && cardAttr2 <= magicNum && cardAttr3 <= magicNum);
    const magicTotNum = 210;
    const maxTotAttr = (
      Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= magicTotNum);
    const zero = 0;
    const minAttr = (
      cardAttr1 >= zero && cardAttr2 >= zero && cardAttr3 >= zero);

    return (
      validateName
   && validateDescription
   && validateImage
   && validadeRare
   && maxAttr
   && maxTotAttr
   && minAttr
    );
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      onInputChange,
      onSaveButtonClick,
    } = this.state;

    const formProps = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      onInputChange,
      onSaveButtonClick,
    };

    return (
      <>
        <Form { ...formProps } isSaveButtonDisabled={ this.isSaveButtonDisabled() } />
        <Card { ...this.state } />
      </>

    );
  }
}

export default App;
