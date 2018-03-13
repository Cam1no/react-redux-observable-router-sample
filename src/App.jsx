import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './containers/form.jsx';
import Result from './containers/result.jsx';

const AppContainer = styled.div`
  height: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: #dcdddf;
  text-align: center;
`

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      text: '',
    };
  }

  handleOnChange = text => {
    this.setState({ text });
  }

  handleOnSubmit = e => {
    e.preventDefault();
    alert('Submit成功');
  }
  
  render() {
    return (
      <AppContainer>
        <FormContainer>
          <Form handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}/>
          <Result text={this.state.text} />
        </FormContainer>
      </AppContainer>
    );
  }
}

export default App;
