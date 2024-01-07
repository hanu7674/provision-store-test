import { applyMiddleware,legacy_createStore as createStore } from 'redux';
import {thunk} from 'redux-thunk'
import monitorReducersEnhancer from '../enhancers/monitorReducer'
import loggerMiddleware from '../middleware/logger';
import rootReducer from '../reducers';
import { env } from '../assets/constants';
export default function configureStore(preloadedState) {
  const middlewares = [thunk]
  if (env !== 'production') {
    middlewares.push(loggerMiddleware);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  if (env !== 'production') {
    enhancers.push(monitorReducersEnhancer);
  }
  const store = createStore(rootReducer, preloadedState, ...enhancers)
    if (env !== 'production' && module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
      }
  return store
}