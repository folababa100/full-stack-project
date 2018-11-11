import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import authAdminReducer'../reducers/adminAuth';
import axios from 'axios';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const accessToken = (store) => (next) => (action) => {
  axios.defaults.headers.common['x-auth'] = store.getState().auth.token ?
    store.getState().auth.token : null;
  return next(action);
};

export default () => {
  const store = createStore(
    combineReducers({
      admin: authAdminReducer
    }),
    composeEnhancers(applyMiddleware(thunk, accessToken))
  );

  return store;
};
