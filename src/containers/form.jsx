import React from 'react';
import styled from 'styled-components'

const Form = ({ handleOnChange, handleOnSubmit }) => {
  return(
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <fieldset>
        <input
          type="text"
          onChange={(e) => handleOnChange(e.target.value)}
        />
        <input type="submit"/>
      </fieldset>
    </form>
  );
}

export default Form;
