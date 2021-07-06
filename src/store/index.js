import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../saga/index.js'
import catalogPageReducer from './reducers/catalogPageReducer.js'
import mainPageReducer from './reducers/mainPageReducer.js'


const sagaMiddleware = createSagaMiddleware()

const rootReducers = combineReducers({
    catalogPageReducer,
    mainPageReducer,
})

export const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);

window.store = store
sagaMiddleware.run(rootWatcher)