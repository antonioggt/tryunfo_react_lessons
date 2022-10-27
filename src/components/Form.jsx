import React from 'react';
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
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label>
          name-input
          <input
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
          />
        </label>
        <label>
          description-input
          <input
            value={ cardDescription }
            onChange={ onInputChange }
            type="text"
            data-testid="description-input"
          />
        </label>
        <label>
          attr1-input
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label>
          attr2-input
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label>
          attr3-input
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label>
          image-input
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
          />
        </label>
        <label>
          rare-input
          <select
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal"> </option>
            <option value="raro"> </option>
            <option value="muito raro"> </option>
          </select>
        </label>
        <label>
          trunfo-input
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            data-testid="trunfo-input"
          />
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

export default Form;
