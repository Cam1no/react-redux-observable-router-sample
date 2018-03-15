import { combineEpics } from 'redux-observable';
import { helloJavenEpics } from './helloJavenEpics'


export const rootEpic = combineEpics(
  helloJavenEpics,
);
