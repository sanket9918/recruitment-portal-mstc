import { createStore, applyMiddleware, compose } from 'redux'
import  thunk  from 'redux-thunk'
import roorReducer from './reducers'

const initialState = {};
const middleware = [thunk]

const store = createStore(
    roorReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
        compose
    )
)

export default store;