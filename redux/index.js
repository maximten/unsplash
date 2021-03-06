import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable'
import reducers from './reducers'
import rootEpic from './epics'

const epicMiddleware = createEpicMiddleware(rootEpic);

export default (initialStore) => (
  createStore(reducers, initialStore, composeWithDevTools(
    applyMiddleware(epicMiddleware)
  ))
)