import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import loggerMiddleware from '../middleware/logger'
import monitorReducerEnhancer from '../enhancers/monitorReducer'
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)


  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}