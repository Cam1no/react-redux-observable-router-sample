import React from 'react';

const Form = ({ handleOnChange, handleOnSubmit }) => {
  return(
    <form onSubmit={ e => handleOnSubmit(e)}>
      <fieldset>
        <input
          type="text"
          onChange={ e => handleOnChange(e.target.value)}
        />
        <input type="submit"/>
      </fieldset>
    </form>
  );
}

export default Form;
