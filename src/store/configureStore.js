import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import authAdminReducer from '../reducers/adminAuth';
import axios from 'axios';
import memberAuth from '../reducers/memberAuth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const accessToken = (store) => (next) => (action) => {
  axios.defaults.headers.common['x-auth'] = store.getState().auth.token ?
    store.getState().auth.token : null;
  return next(action);
};

export default () => {
  const store = createStore(
    combineReducers({
      admin: authAdminReducer,
      auth: memberAuth
    }),
    composeEnhancers(applyMiddleware(thunk, accessToken))
  );

  return store;
};
