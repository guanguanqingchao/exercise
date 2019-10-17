import {
    createStore,
    applyMiddleware,
    compose
} from "redux";

import {
    forbiddenWordsMiddleware
} from 'middleware';

import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import rootReducer from "reducers";
import watcherSaga from "saga";


const initialiseSagaMiddleware = createSagaMiddleware();
//for devtool
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware))
);


initialiseSagaMiddleware.run(watcherSaga);
export default store