import { createStore, combineReducers, applyMiddleware } from 'redux'
import toons from '../_reducers/toons'
import favorites from '../_reducers/favorites'
import { logger, thunk } from './middleware'




const reducers = combineReducers({
    toons, favorites
})

const store = createStore(
    reducers,
    applyMiddleware(logger, thunk)
)


export default store