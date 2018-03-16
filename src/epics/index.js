import { combineEpics } from 'redux-observable';
import { wordCounterEpics } from './wordCounterEpics'


export const rootEpic = combineEpics(
  wordCounterEpics,
);
