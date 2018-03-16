import React, { Component } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Routing from './containers/Routing.jsx';
import reducer from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(reducer, applyMiddleware(epicMiddleware));

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
          <Routing />
        </RootContainer>
      </Provider>
    );
  }
}

export default Root;
