import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import upcomingReducer from './reducers/upcomingReducer'
import popularReducer from './reducers/popularReducer'
import topratedReducer from './reducers/topratedReducer'

const middlewares = compose(applyMiddleware(thunk, logger))


const reducers = combineReducers({
    upcoming: upcomingReducer,
    popular: popularReducer,
    toprated: topratedReducer
})

const store = createStore(reducers, composeWithDevTools(middlewares));


export default store;