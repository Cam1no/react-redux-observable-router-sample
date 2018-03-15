import 'rxjs/Rx';

export const helloJavenEpics = action$ =>
  action$.ofType('ADD_TODO')
    .map((action) => {
      const { text } = action;
      return { type: 'ADD_JAVEN', text: `${text.length}${text}` }
    })
