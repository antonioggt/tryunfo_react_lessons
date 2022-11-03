import React from 'react';
import PropTypes from 'prop-types';
import './form.css';
/* import NameInput from './NameInput';
import DescriptionInput from './DescriptionInput';
import Attr1Input from './Attr1Input';
import Attr2Input from './Attr2Input';
import Attr3Input from './Attr3Input';
import ImageInput from './ImageInput';
import RareInput from './RareInput';
import TrunfoInput from './TrunfoInput'; */

class Form extends React.Component {
  render() {
    const {
      cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    const inputCheck = (<input
      name="cardTrunfo"
      checked={ cardTrunfo }
      onChange={ onInputChange }
      type="checkbox"
      data-testid="trunfo-input"
    />);
    const mensagem = 'Você já tem um Super Trunfo em seu baralho';
    return (
      <form className="form__container">
        <label htmlFor="name-input">
          name-input
          <input
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          description-input
          <input
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            type="text"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          attr1-input
          <input
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          attr2-input
          <input
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          attr3-input
          <input
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          image-input
          <input
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          rare-input
          <select
            name="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro </option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          trunfo-input
          { hasTrunfo ? mensagem : inputCheck }
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
