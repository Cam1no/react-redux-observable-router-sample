import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Form from './Form.jsx'
import Result from './Result.jsx';
import { addTodo } from '../actions';

const FormContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: #dcdddf;
  text-align: center;
`

class App extends Component {

  handleOnChange = text => this.props.dispatch(addTodo(text));

  handleOnSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <FormContainer>
        <Form handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}/>
        <Result text={this.props.text} />
      </FormContainer>
    );
  }
}

const mapStateToProps = state => {
  return { text: state.todo.text }
}

export default connect(mapStateToProps)(App);
