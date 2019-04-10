import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxPromise from 'redux-promise-middleware';
import hackerNewsReducer from './ducks/hackerNewsReducer';
import mediumNewsReducer from './ducks/mediumReducer';
import redditNewsReducer from './ducks/redditReducer';

const rootReducer = combineReducers({
    hacker: hackerNewsReducer,
    medium: mediumNewsReducer,
    reddit: redditNewsReducer,
}) 

const middlewear = applyMiddleware(reduxPromise);
export default createStore(rootReducer, middlewear);