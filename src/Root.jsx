import React, { Component } from 'react';
import styled from 'styled-components';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App.jsx';
import reducer from './reducers';

const store = createStore(reducer);

const RootContainer = styled.div`
  height: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer>
          <App />
        </RootContainer>
      </Provider>
    );
  }
}

export default Root;
