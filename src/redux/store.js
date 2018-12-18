import { createStore, combineReducers } from 'redux'
import rateReducer from './rate'

const reducers = combineReducers({
  rates: rateReducer,
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
